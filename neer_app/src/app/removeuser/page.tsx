'use client'

import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../redux/slice";

export default function Page (){
    const userdata = useSelector((data:any)=>data.users)
    const dispatch = useDispatch();
    const handledelete = (id:any) => {
        dispatch(deleteUser(id))
    }
    return (
        <div>
            <ul>
                {
                    userdata?.map((items:any) => {
                        const{id,name} =items
                        return (
                            <li key={id}>
                                <h1>User:   {name}</h1>
                                <button onClick={()=>handledelete(id)}>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}