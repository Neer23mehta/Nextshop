import Link from "next/link";
import { title } from "process";

export default function Error(){
    return (
        <div className="flex flew-col justify-center gap-5 px-5 pc-2 items-center">
            <h1>404 Not found Page for Login</h1>
            <Link href="/">
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">
            Go Home</button></Link>
        </div>
    )
}

export function generateMetadata(){
    return {
        title:"Login Page",
    }
}