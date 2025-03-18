import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "../../../lib/db";
import {Product} from "../../../lib/model/products"

export async function GET(){
  try {
    await mongoose.connect(connectionSrt)
    const data = await Product.find()
    console.log("pro",data)
    return NextResponse.json({results:data})
  } catch (error) {
    console.log(error)
  }
}
export async function POST(request){
    try {
        const payload = await request.json();
        await mongoose.connect(connectionSrt);
        let product = new Product(payload)
        const results = await product.save();
        return NextResponse.json({results,success:true})
    } catch (error) {
        console.log(error)
    }
}