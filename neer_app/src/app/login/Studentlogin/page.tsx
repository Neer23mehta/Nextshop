import Link from "next/link";
import React from "react";

const Studentlogin = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Hello Studentlogin Page</h1>
            
            <Link
                href="/"
                className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default Studentlogin;
