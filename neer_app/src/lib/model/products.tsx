import mongoose from "mongoose";


const productModel = new mongoose.Schema({
    name:String,
    age:String,
    city:String
});
export const Product = mongoose.models.products||mongoose.model("products",productModel);