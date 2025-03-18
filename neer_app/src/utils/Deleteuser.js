'use client'
export default function Delete(props){
    const id = props.id

    const handledelete = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/users/${id}`,{
                method:"DELETE"
            })
            const data = await res.json();
            if(data.success){
                alert("Deleted Successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button onClick={handledelete}>Delete</button>
    )
}