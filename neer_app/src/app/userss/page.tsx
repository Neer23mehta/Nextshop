import Link from "next/link";
import Getuser from "../../../Service/getUsers";

export default async function Userlists() {
    const getUserdata = Getuser();
    const users = await getUserdata;
    console.log("users", users);

    return (
        <div>
            <ul>
                {
                    users.map((curVal: any) => {
                        return <li key={curVal.id}>
                            <Link href={`userss/${curVal.id}`}>
                            <h1>Users: {curVal.firstName}</h1>
                            </Link>
                            </li>;
                    })
                }
            </ul>
        </div>
    );
}
