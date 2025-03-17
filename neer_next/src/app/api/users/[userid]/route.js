import { users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request,content) {  
    const userData = users?.filter((item)=>item.id == content.params.userid)
    return NextResponse.json(userData?.length == 0?{result:"No data found"}:{result:userData},{status:200})
}
