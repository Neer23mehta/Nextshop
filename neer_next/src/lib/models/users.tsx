const { default: mongoose } = require("mongoose");


const users = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

export const User = mongoose.models.registers || mongoose.model("registers",users)