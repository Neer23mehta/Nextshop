import { connectionStr } from "../../../lib/db";
import { User } from "../../../models/user";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const payload = await request.json();
        const {password,username,email} = payload;
        const hashedpayload = await bcrypt.hash(password, 10)
        await mongoose.connect(connectionStr);
        const user = new User({username,email,password:hashedpayload});
        console.log("name",payload.username)
        const res = await user.save();

        if(!payload && hashedpayload){
            return NextResponse.json({
              results:"please give details",success:false
            },{status:401})
          }
          else{
            return NextResponse.json({ res, success: true });
          }
    } catch (error) {
        console.log(error)
    }
}
export async function GET() {
    try {
        await mongoose.connect(connectionStr)
        const data = await User.find();
        return NextResponse.json({results:data,success:true},{status:201})
    } catch (error) {
        console.log(error)
    }
}