import React from "react";

export default function RootLayout({
    children,
    admin,
    user,
}:{
    children: React.ReactNode,
    admin:React.ReactNode,
    user:React.ReactNode
}) {
    return (
        <div>
            {children}
            <div className="container">
                <div className="admin">
                {admin}
                </div>
                <div className="admin">
                {user}
                </div>
            </div>
        </div>
    )
}