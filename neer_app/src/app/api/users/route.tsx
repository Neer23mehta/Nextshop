import {users} from "@/utils/db"
import { NextResponse } from "next/server"
export async function GET(){
    const data = users 
    return NextResponse.json(data,{status:200})
}
export async function POST(request:any){
    // const payload = await request.json();
    // console.log("request",payload)
    try {
        // let payload = await request.json();
        return NextResponse.json({result:"Hello"});
    } catch (error) {
        console.log(error)
    }
}