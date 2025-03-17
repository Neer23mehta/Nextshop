import Link from "next/link";

async function getApi(){
    const data = await fetch ("http://localhost:3003/api/users")
    const users = await data.json();
    return users;
}

export default async function Page(){
    const datas = await getApi()

    return (
        <div>
            <ul>
                {
                    datas.map((items:any) => {
                        return <li key={items.id}>
                            <Link href={`use/${items.id}`}><h1>Name:{items.name}</h1></Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}