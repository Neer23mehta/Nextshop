import mongoose from "mongoose"
import { connectionStr } from "./db"


export const ConnectMong0 = async () => {
    try {
        await mongoose.connect(connectionStr)
        console.log("connected");
    } catch (error) {
        console.log("error in connecteion",error)
    }
}