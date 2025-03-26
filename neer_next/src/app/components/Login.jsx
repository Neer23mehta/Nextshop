'use client'

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3001/api/register")

            const data = await res.json();

            const user = data.results.find((item)=>item.email == email)
            console.log("user",user)

            if(user){
                alert("Successfully Logged-In");
                router.push("/dashboard")
            }
            else{
                alert("Please fill the Correct information")
                setError("incomplete data")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center flex-col align-center">
            <div className="shadow-lg p-5 border-t-4 border-red-300 flex justify-center align-center flex-col">
                <h1 className="text-xl font-bold my-2 items-center">Please Enter the Detail</h1>

                <form className="flex flex-col gap-3" onSubmit={(e)=>handlesubmit(e)}>
                    <input type="email" placeholder="email"
                        className="w-full px-2 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <input type="password" placeholder="password"
                        className="w-full px-2 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <button className="font-bold bg-green-500 px-4 py-2 text-white">Login</button>
                    {error && (
                        <div className="bg-red-700 text-white w-fit text-sm py-2 px-1 rounded-md mt-2">
                            {error}
                        </div>
                    )
                    }
                    <Link href="/register" className="text-sm text-center mt-2">Don't Have An Account Create One <span className="underline text-blue-500">Register</span></Link>
                </form>
            </div>
        </div>
    )
}