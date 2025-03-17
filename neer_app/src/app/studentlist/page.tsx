import Link from "next/link";

export default function StudentList(){
    return (
        <div>
            <h1>Hello All Students</h1>
            <ul>
                <li>
                    <Link href="/studentlist/Neer1">Neer1</Link>
                </li>
                <li>
                <Link href="/studentlist/Neer2">Neer2</Link>
                </li>
                <li>
                <Link href="/studentlist/Neer3">Neer3</Link>
                </li>
                <li>
                <Link href="/studentlist/Neer4">Neer4</Link>
                </li>
            </ul>
        </div>
    )
}