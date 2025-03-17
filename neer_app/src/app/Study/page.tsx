import { Redirect } from "next"
import { redirect } from "next/navigation"

export default function Study(){
    redirect("/userss")

    return (
        <div>
            <h1>All College Study Material</h1>
        </div>
    )
}