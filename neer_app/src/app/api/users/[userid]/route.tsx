import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request:any,contents:any){
    const data = users
    const userData = data.filter((items)=>items.id == contents.params.userid)

    return NextResponse.json(userData,{status:200})
}
export async function PUT(request:any,content:any){
        const payload = await request.json()
        payload.id = content.params.userid;
        
        return NextResponse.json({results:payload,success:true},{status:201})
}
export function DELETE(request:any,content:any){
        const id = content.params.userid;
        if(id)
        {
            return NextResponse.json({result:"success",success:true},{status:201})
        }
        else{
            return NextResponse.json({result:"unsuccessfull",success:false},{status:401})
        }
}