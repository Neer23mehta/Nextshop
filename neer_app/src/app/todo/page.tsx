'use client'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoslice";

export default function Page() {
    const [todo,settodo] = useState("");
    const dispatch = useDispatch()
    const todos = useSelector((data:any)=>data.tododata.todos)
    const handleclick = (todo:string) => {
        dispatch(addTodos(todo))
    }
    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Add Products</h1>
        <input
            type="text"
            placeholder="Name"
            name="name"
            value={todo}
            onChange={(e)=>settodo(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
            <button onClick={()=>handleclick(todo)}> Add Todo</button>
        </div>


        <div>
            <h1>display Todo</h1>
            <ul>
                {
                    todos.map((items:any)=>{
                        return (
                            <li key={items.id}>
                                <h1>Todo:{items.todo}</h1>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </div>
    )
}