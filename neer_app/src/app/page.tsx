'use client';
import Image from "next/image";
import { About } from "./About";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight:'100',
//   subsets:["latin"],
//   display:"swap"
// })
// Define the interface for the User component
interface Username {
  Name: string;
}

export default function Home() {
  const router = useRouter();
  const [Name, setName] = useState("Neer");

  const apple = () => {
    setName("Neer Mehta");
  };

  console.log("Env",process.env.NODE_ENV)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Hello {Name}</h1>
        
        {[...Array(1)].map((_, index) => (
          <User key={index} Name={Name} />
        ))}
        
        <About />

        <button
          onClick={apple}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Change Name
        </button>

        <div className="flex gap-4 mt-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Go to Login Page
          </Link>
          <Link
            href="/About"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Go to About Page
          </Link>
          <Link
            href="/addproduct"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Add Details
          </Link>
          <Link
            href="/details"
            className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-700 transition duration-300"
          >
            Details
          </Link>
          <Link
            href="/file"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add File
          </Link>
        </div>
        <div>
        <Link
            href="/addusers"
            className="px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-700 transition duration-300"
          >
            Add User Info
          </Link>
          <Link href="/todo"
            className="px-4 py-2 ml-5 bg-rose-500 text-white rounded-lg hover:bg-rose-700 transition duration-300"
            >
              Add Todo List 
          </Link>
        </div>
        

        <button
          onClick={() => router.push("/login")}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 transition duration-300"
        >
          Navigate to Login Page
        </button>
        <h1>Font Feature on NExt.js</h1>
      </main>
    </div>
  );
}

const User: React.FC<Username> = (props) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md text-center">
      <h2 className="text-xl font-semibold">Hello, My Name Is {props.Name}</h2>
    </div>
  );
};
