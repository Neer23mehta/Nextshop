async function apiget (){
    const res = await fetch ("https://dummyjson.com/products");
    const data = await res.json();
    return data;
}

export default async function Page(){
    const get = await apiget();
    console.log("products",get)
    return (
        <div>
            <h1>Testing</h1>
        </div>
    )
}

