async function fetchget(){
    const ress = await fetch ("http://localhost:3000/api/products")
    const data = await ress.json();
    return data.results
}

export default async function Page() {
    const datas = await fetchget();
    console.log("neer",datas)
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">All Details</h1>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <td className="px-4 py-2 border text-left">Name</td>
                        <td className="px-4 py-2 border text-left">Age</td>
                        <td className="px-4 py-2 border text-left">City</td>
                    </tr>
                </thead>
                <tbody>
                    {/* Example row */}
                   {
                    datas.map((items:any) => {
                        console.log("any",items)
                        const {name,age,city,id} = items;
                        return(
                            <tr key={id}>
                            <td className="px-4 py-2 border">{name}</td>
                            <td className="px-4 py-2 border">{age}</td>
                            <td className="px-4 py-2 border">{city}</td>
                            </tr>    
                        )
                    })
                   }
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}
