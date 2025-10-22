import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col">
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
              {/* no user login buttons here - static layout */}
            </div>
          </nav>
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
