'use client'

import { useState } from "react"

export default function Products():any{
    const [color,setcolor] = useState({backgroundColor:'green'})
    return (
        <div>
            <button onClick={()=>alert("Hello")}>Click Me </button>
            <br />
            <h1 style={color}>Hello</h1>
            <br />
        <button onClick={()=>setcolor({backgroundColor:'red'})}>Change Color</button>
        </div>
    )
}