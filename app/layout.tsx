"use client";
import React, { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(false);

  return (
    <>
      <header className="bg-blue-700 text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
          <div className="text-xl font-bold hover:underline cursor-pointer">
            <a href="/">Real Estate Pro</a>
          </div>
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/listings" className="hover:underline">Listings</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
          <div>
            {user ? (
              <button
                onClick={() => setUser(false)}
                className="bg-blue-800 px-4 py-1 rounded hover:bg-blue-600 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setUser(true)}
                className="bg-blue-800 px-4 py-1 rounded hover:bg-blue-600 transition"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-6 md:px-0 pt-8">
        {children}
      </main>
      <footer className="bg-gray-100 text-center text-gray-600 py-5 mt-12">
        &copy; {new Date().getFullYear()} Real Estate Pro &bull; All rights reserved.
      </footer>
    </>
  );
}
