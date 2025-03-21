'use client'
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUser } from "../redux/slice"
import { useEffect } from "react";

export default function Page(){
    const dispatch = useDispatch()
    const apiUserData:any = useSelector((data)=>data);

    const data = apiUserData.userdata.UserApiData
    
    return (
        <div>
            <h1>Api of Users</h1>
            <button onClick={()=>dispatch(fetchApiUser())}>Load User</button>
            <ul>
                {
                    data.map((items:any,index:number)=>{
                        const{age,maidenName,lastName,firstName,email,gender,image,birthDate,phone,bloodGroup,height,weight,eyeColor,ip,address,university,bank,company}= items;
                        // const LN = lastName.toLowerCase();
                        const MN = maidenName.slice(0,1)
                        return (
                            <li key={index}>
                                <h1>FullName:  {firstName + `. ${MN}` + ` ${lastName}`}</h1>
                                 
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}