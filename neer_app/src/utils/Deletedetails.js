'use client'
export default function Delete (props) {
    const id = props.id
    const handleclick = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await res.json();
            if (data.success) {
                alert("Deleted successfully");
            }
        }
         catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <button onClick={handleclick}>Delete</button>
        </div>
    )
}