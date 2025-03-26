'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const [names, setname] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 

    const router = useRouter();

    const handlechange = (e) => {
        const { value, name } = e.target;
        setname({
            ...names, [name]: value,
        });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (!names.username || !names.email || !names.password) {
            setError("All fields are required");
            return;
        }

        setLoading(true); 

        try {
            // const results = await fetch ("http://localhost:3000/api/userexist",{
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(names.email)
            // })
            //     const user = await results.json();

            // if(user){
            //     setError("User Already Exist")
            //     return;
            // }
            const res = await fetch("http://localhost:3001/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(names)
            });

            if (res.ok) {
                const form = e.target;
                form.reset()
                router.push("/")
            }
            const data = await res.json();
            if (data.success) {
                setError(""); 
                console.log(data);
            } else {
                setError(data.message); 
            }

        } catch (error) {
            console.log(error);
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="flex justify-center flex-col align-center">
            <div className="shadow-lg p-5 border-t-4 border-red-300 flex justify-center align-center flex-col">
                <h1 className="text-xl font-bold my-2 items-center">Register</h1>

                <form className="flex flex-col gap-3" onSubmit={(e) => handlesubmit(e)}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-2 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={names.username}
                        name="username"
                        onChange={(e) => handlechange(e)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-2 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={names.email}
                        name="email"
                        onChange={(e) => handlechange(e)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-2 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={names.password}
                        name="password"
                        onChange={(e) => handlechange(e)}
                    />
                    <button
                        className="font-bold bg-green-500 px-4 py-2 text-white"
                        type="submit"
                        disabled={loading} 
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                    {error && (
                        <div className="bg-red-700 text-white w-fit text-sm py-2 px-1 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link href="/" className="text-sm text-center mt-2">
                        Already have an account? <span className="underline text-blue-500">Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}
