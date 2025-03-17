'use client'
import { ReactNode } from "react";

// interface Params {
//     params: {
//         student: string;
//     };
// }

const StudentList = (props:any) => {
    return (
        <div>
            <h1>Students Details</h1>
            <h1>name: {props.params.student}</h1>
        </div>
    );
}

export default StudentList;
