import { ReactNode } from "react";


interface Layoutprops {
    children: ReactNode
}

const Layout:React.FC<Layoutprops> = ({children}) => {
    return (
        <>
        <h1>Hello About</h1>
        {children}
        </>
    )
}

export default Layout;