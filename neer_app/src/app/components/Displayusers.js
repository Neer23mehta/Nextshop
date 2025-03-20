'use client'
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../redux/slice";
import { useEffect } from "react";

export default function Displayusers(){
    const usersData = useSelector((data) => data.userdata.users)
    console.log("users",usersData)
    const dispatch = useDispatch();

    const handleclick = (id) => {
        dispatch(deleteUser(id))
    }
    useEffect(()=>{
        const items = localStorage.getItem("User")
        if(items){
            JSON.parse(items)
        }
    },[])
    return (
        <div className="max-w-lg mx-auto mt-8 bg-white flex flex-col justify-center align-center">
            <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
            <ul>
                {
                    usersData.map((items)=>{
                        const {id,name} = items;
                        return (
                            <li key={id} className="flex flex-row justify-between align-center mt-2">
                                <h1>Username:  {name}</h1>
                                <div className="flex justify-end align-center">
                                <button onClick={()=>handleclick(id)}>Remove</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}