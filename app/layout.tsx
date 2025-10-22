import "./globals.css";
import React, { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(false);
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col">
        {/* Header, nav, main, footer as before */}
        {/* ...your layout code here... */}
        <header className="bg-blue-700 text-white shadow-md">
          {/* ... navbar ... */}
        </header>
        <main className="flex-grow container mx-auto px-6 md:px-0 pt-8">
          {children}
        </main>
        <footer className="bg-gray-100 text-center text-gray-600 py-5 mt-12">
          &copy; {new Date().getFullYear()} Real Estate Pro &bull; All rights reserved.
        </footer>
      </body>
    </html>
  );
}
