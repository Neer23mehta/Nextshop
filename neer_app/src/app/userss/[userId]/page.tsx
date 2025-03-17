import Getuser from "../../../../Service/getUsers"

export default async function UserID(props:any) {
      const getUserdata = Getuser();
        const users = await getUserdata;
        const currentId = props.params.userId;
        const userData = users[currentId-1];
        console.log("users", users[currentId-1]);
    return (
        <div>
            <h1>User Detail:</h1>
            <h2>{userData.id}</h2>
            <h2>{userData.firstName}</h2>
        </div>
    )
}
