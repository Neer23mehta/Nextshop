import mongoose from "mongoose";
import { NextResponse } from "next/server"
import { connectionSrt } from "../../../../lib/db";
import { Product } from "@/lib/model/products";

// export async function PUT(request:any,content:any) {
//     const productId = await content.params.productid
//     const filter = {_id:productId}
//     const payload = await request.json();
//     console.log(payload)
//     await mongoose.connect(connectionSrt)
//     const result = await Product.findOneAndUpdate(filter,payload)
//     return NextResponse.json({result,success:true})
// }
// export async function GET(request:any,content:any) {
//     const productId = await content.params.productid
//     const record = {_id:productId}
//     await mongoose.connect(connectionSrt)
//     const result = await Product.find(record)
//     return NextResponse.json({result,success:true})
// }
// export async function DELETE(request:any, content:any) {
//     const productId = content.params.productid;
//     const record = { _id: productId };

//     await mongoose.connect(connectionSrt);

//     const result = await Product.deleteOne(record);

//     return NextResponse.json({ result, success: true });
// }
export async function PUT(request:any,content:any){
    const productID = content.params.productid;
    const filter = {_id:productID};
    await mongoose.connect(connectionSrt);
    const payload = await request.json()
    const results = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({results},{status:201})
}

export async function DELETE(request:any,content:any){
    const productid = content.params.productid;
    const filter = {_id:productid};

    await mongoose.connect(connectionSrt);

    const results = await Product.deleteOne(filter)

    return NextResponse.json({results,success:true},{status:201})
}
export async function GET(request:any,content:any){
    const productid = content.params.productid;
    const result = {_id:productid};
    await mongoose.connect(connectionSrt);
    const data = await Product.find(result)
    return NextResponse.json({data,success:true},{status:201})
}