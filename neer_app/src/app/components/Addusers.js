"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {addUser} from "../../app/redux/slice"
import Link from "next/link"

export default function Addusers (){
    const [name,setname] = useState("")
    const dispatch = useDispatch();
    const handleuser = () => {
        console.log(name)
        dispatch(addUser(name))
    }
    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Add Products</h1>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleuser} className="px-4 py-2 mt-5 bg-red-500 rounded-md hover:bg-red-700 justify-ceter align-center ml-45 flex">Add User</button>
            <Link href="/removeuser">Remove User</Link>
            <Link href="/apiadd">Users Details</Link>
        </div>
    )
}