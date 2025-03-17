import { users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET() {     
    const data = users;
    return NextResponse.json(data,{status:200})
}
