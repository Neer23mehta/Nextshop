'use client'
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { itemsid: string } }) {
    const { itemsid } = params; 

    const [input, setInput] = useState({
        name: "",
        age: "",
        email: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleClick = async () => {
        const res = await fetch(`http://localhost:3000/api/users/${itemsid}`, {
            method: "PUT",
            body: JSON.stringify({ input }),
        });
        const data = await res.json();
        console.log(data);
    };

    useEffect(() => {
        if (itemsid) {  
            handleApi();
        }
    }, [itemsid]);

    const handleApi = async () => {
        try {
            const data = await fetch(`http://localhost:3000/api/users/${itemsid}`);
            const datas = await data.json();
            setInput({
                name: datas.name || "",
                age: datas.age || "",
                email: datas.email || "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Edit User</h1>
            <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={input.name}
            />
            <br />
            <input
                type="number"
                placeholder="Age"
                name="age"
                onChange={handleChange}
                value={input.age}
            />
            <br />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={input.email}
            />
            <div>
                <button onClick={handleClick}>Update User</button>
            </div>
        </div>
    );
}
