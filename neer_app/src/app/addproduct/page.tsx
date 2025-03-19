'use client'
import { useEffect, useState } from "react"
import "../addproduct/product.css"

export default function Page() {
    const [input, setinput] = useState({
        "name": "",
        "age": "",
        "city": "",
    });

    const handlechange = (e: any) => {
        const { name, value } = e.target;
        setinput({
            ...input, [name]: value,
        });
    };

    const handleclick = async () => {
        console.log(input);
        try {
            const res = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input), 
            });
            const data = await res.json();
            console.log(data); 
            alert("Details added")
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleApi();
    }, []);

    const handleApi = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/products");
            const data = await response.json();
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
                onChange={(e) => handlechange(e)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="number"
                placeholder="Age"
                name="age"
                value={input.age}
                onChange={(e) => handlechange(e)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="City"
                name="city"
                value={input.city}
                onChange={(e) => handlechange(e)}
                className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-center">
                <button
                    onClick={() => handleclick()}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Add Details
                </button>
            </div>
        </div>
    );
}
