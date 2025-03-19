import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('File');
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { message: 'No valid image found', success: false },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);  

    const path = `./public/${file.name}`;  

    await writeFile(path, buffer);

    return NextResponse.json(
      { message: 'Image uploaded successfully', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', success: false },
      { status: 500 }
    );
  }
}
