import { User } from "../../../lib/models/users"
import { connectionStr } from "../../../lib/db"
import mongoose from "mongoose"
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const payload = await request.json();
        const{email} = payload;
        await mongoose.connect(connectionStr)
        const user = await User.findOne({email}).select("_id");
        return NextResponse.json({result:user,success:true},{status:201})
    } catch (error) {
        console.log(error)
    }
}

export async function GET() {
    try {
        await mongoose.connect(connectionStr)
        const data = await User.find()
        return NextResponse.json({results:data,success:true},{status:201 })
    } catch (error) {
        console.log(error)
    }
}