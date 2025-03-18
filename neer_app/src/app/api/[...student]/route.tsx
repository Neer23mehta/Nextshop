import { NextResponse } from "next/server"

export async function GET(request:any,content:any){
    try {
        const studentdetail = content.params.student
        return NextResponse.json({result:studentdetail})
    } catch (error) {
        console.log(error)
    }
}