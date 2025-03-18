'use client'
import { useState } from "react"

export default function User(){
    const [input,setinput] = useState({
        name:"",
        age:"",
        email:"",
    });
    const handlechange = (e:any) => {
        const{name,value} = e.target;
        setinput({
            ...input,[name]:value,
        })
    }
    const handleclick = async () => {
        try {
            const res = await fetch ("http://localhost:3000/api/users",{
                method:"POST",
                body:JSON.stringify({input})
            }
            )
            const data = await res.json()
            console.log("output",data)
            return data
        } catch (error) {
            console.log("error",error)
        }
    }
    return (
        <div>
            <h1>Add New Users</h1>
            <input type="Text" placeholder="Name" name="name" onChange={(e)=>handlechange(e)} value={input.name}/>
            <br></br>
            <input type="Number" placeholder="Age" name="age" onChange={(e)=>handlechange(e)} value={input.age}/>
            <br />
            <input type="email" placeholder="email" name="email" onChange={(e)=>handlechange(e)} value={input.email}/>
            <div>
            <button onClick={handleclick}>Add User</button>
            </div>
        </div>
    )
}