'use client'
import { useDispatch } from "react-redux"
import { fetchApiUser } from "../redux/slice"

export default function Page(){
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Api of Users</h1>
            <button onClick={()=>dispatch(fetchApiUser())}>Load User</button>
        </div>
    )
}