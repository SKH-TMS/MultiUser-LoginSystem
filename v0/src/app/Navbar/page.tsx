"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there's a token in cookies
    const token = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("token="));
    setIsAuthenticated(!!token); // Set authentication state based on token presence
  }, []);

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/userData/LoginUser">Login</Link>
      <Link href="/userData/RegisterUser">Register</Link>
      <Link href="/userData/ProfileUser">Profile</Link>
      <Link href="/adminData/RegisterAdmin" className="text-red-600">
        Admin Register
      </Link>
      <Link href="/adminData/LoginAdmin" className="text-red-600">
        Admin Login
      </Link>
      <Link href="/adminData/ProfileAdmin" className="text-red-600">
        Admin Profile
      </Link>
      {isAuthenticated ? <Link href="/api/auth/logout">Logout</Link> : null}
    </nav>
  );
}
