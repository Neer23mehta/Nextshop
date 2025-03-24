async function fetchgetdata() {
    const res = await fetch("https://dummyjson.com/users")
    const data = await res.json()
    return data.users

}   

export default async function Users() {
    const datas = await fetchgetdata();

    return (
        <div>
            <h1>Users Detail</h1>
            <ul>
                {
                    datas.map((curItem:any) => {
                        const{firstName,lastname,age,gender,phone,email} = curItem;
                        return(
                        <li key={curItem.id}>
                            <h1>Name:{firstName}</h1>
                            <p>Gender:{gender}</p>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}