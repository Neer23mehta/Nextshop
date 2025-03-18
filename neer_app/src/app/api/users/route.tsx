import {users} from "@/utils/db"
import { NextResponse } from "next/server"
export async function GET(){
    const data = users 
    return NextResponse.json(data,{status:200})
}
export async function POST(request: any) {
    try {
        console.log("request",request)
        const payload = await request.json();
        console.log("Request payload:", payload);


        return NextResponse.json({ result: payload },{status:201});
    } catch (error) {
        return NextResponse.json({ error: "Failed to process the request" }, { status: 400 });
    }
}