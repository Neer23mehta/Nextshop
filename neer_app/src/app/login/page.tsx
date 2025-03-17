import Link from "next/link";
import { title } from "process";
import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Hello Login Page</h1>
            
            <div className="space-y-4">
                <Link
                    href="/"
                    className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                >
                    Go to Home
                </Link>
                
                <Link
                    href="/login/Studentlogin"
                    className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                >
                    Go to Studentlogin
                </Link>
            </div>
        </div>
    );
};

export default Login;

export function generateMetadata(){
    return {
        title : "Login-Page",
    }
}