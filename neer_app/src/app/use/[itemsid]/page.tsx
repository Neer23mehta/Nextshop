async function getApis(id:number){
    const data = await fetch (`http://localhost:3003/api/users/${id}`)
    const users = await data.json();
    console.log("users",users)
    return users;
}

export default async function Page({params}:any){
    console.log("params",params)
    const datas = await getApis(params.itemsid)

    return (
        <div>
            <ul>
               <li>
                <h1>Name:{datas[0].name}</h1>
                <h1>Age: {datas[0].age}</h1>
               </li>
            </ul>
        </div>
    )
}