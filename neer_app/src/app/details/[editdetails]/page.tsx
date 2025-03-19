'use client'
import { useEffect, useState } from "react"

interface Props {
    params: {
        editdetails: any;
    };
}

export default function Page({ params }: Props) {

    const [input, setInput] = useState({
        "name": "",
        "age": "",
        "city": "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value,
        });
    };
    const handleClick = async () => {
        const id = params.editdetails;
        try {
            const res = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });

            if (!res.ok) {
                throw new Error("Failed to update");
            }

            const data = await res.json();
            alert("Updated Successfully");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Add Products</h1>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="number"
                placeholder="Age"
                name="age"
                value={input.age}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="City"
                name="city"
                value={input.city}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-center">
                <button
                    onClick={handleClick}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Update Details
                </button>
            </div>
        </div>
    );
}


