import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request:any,contents:any){
    const data = users
    const userData = data.filter((items)=>items.id == contents.params.userid)

    return NextResponse.json(userData,{status:200})
}