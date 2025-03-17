import Image from "next/image"
import img from "../../public/vercel.svg"

export const About  = () => {
    return (
        <>
        <h1>About Me</h1>
        <Image src={img} alt="Image" height={100} width={100} style={{backgroundColor:"black",color:"blue",marginLeft:100}}/>
        </>
    )
}