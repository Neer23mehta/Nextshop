'use client'
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const Pathname = usePathname();
  return (
    <div>
    {
        Pathname!=="/login/About"?  <ul className='flex flex-row justify-center gap-5'>
        <li>
            <h1 className='px-5 py-2 text-black '>
                Login Navbar
            </h1>
        </li>
        <li>
          <Link href="/">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700">
          Home Page</button>
          </Link>
        </li>
        <li>
          <Link href="/login/Studentlogin">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
          Student Login</button>
          </Link>
        </li>
        <li>
          <Link href="/About">
            
              <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-700">
                About Page
              </button>
            
          </Link>
        </li>
      </ul>:
      null
    }
      {children}
    </div>
  );
};

export default Layout;
