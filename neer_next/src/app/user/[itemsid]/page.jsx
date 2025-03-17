
async function getApis({params}){
    const id = params.itemsid
    const data = await fetch (`http://localhost:3007/api/users/${id}`)
    const users = await data.json();
    return users;
}

export default async function Page({params}){
    console.log("params",params)
    const datas = await getApis()

    return (
        <div>
            <ul>
                {
                    datas.map((curval) => {
                        return <li key={curval.id}>
                            <h1>Name:{curval.name}</h1>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}