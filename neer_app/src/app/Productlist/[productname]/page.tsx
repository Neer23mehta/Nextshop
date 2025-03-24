
async function fetchget(id:Number){
    const res= await fetch (`https://dummyjson.com/products/${id}`)
    const data = res.json()
    return data
}

export default async function Apiget ({params}:any) {
    const data = await fetchget(params.productname);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}