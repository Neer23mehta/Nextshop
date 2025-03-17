
import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <>
            <h1>Hello About page</h1>
            <Link href="/About/AboutCollege">Go to About College</Link>
            <Link href="/About/AboutStudent">Go to About Student</Link>
        </>
    );
};

export default About;
