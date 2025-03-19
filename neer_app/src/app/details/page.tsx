'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();
  return data.results; 
};

const Page = () => {
  const [datas, setDatas] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setDatas(products);
    };
    fetchData();
  }, []);

  const handleclick = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", 
        },
      });
      const data = await res.json();
      if (data.success) {
        alert("Deleted successfully");
        setDatas((prevData) => prevData.filter((item) => item._id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Details</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border text-left">Name</td>
            <td className="px-4 py-2 border text-left">Age</td>
            <td className="px-4 py-2 border text-left">City</td>
            <td className="px-4 py-2 border text-left">Action</td>
            <td className="px-4 py-2 border text-left">Delete</td>
          </tr>
        </thead>
        <tbody>
          {datas.map((item: any) => {
            const { name, age, city, _id } = item;
            return (
              <tr key={_id}>
                <td className="px-4 py-2 border">{name}</td>
                <td className="px-4 py-2 border">{age}</td>
                <td className="px-4 py-2 border">{city}</td>
                <td className="px-4 py-2 border">
                  <Link href={`/details/${_id}`} passHref>
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </Link>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleclick(_id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex align-center flex col justify-center">
        <Link href="/addproduct"><button className="px-4 py-2 mt-5 bg-green-500 text-white rounded-lg hover:bg-green-900 transition duration-300">Add New Details</button></Link>
      </div>
    </div>
  );
};

export default Page;
