export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          background: "#3056D3", color: "#fff", padding: "15px 0",
          textAlign: "center", fontWeight: 600, letterSpacing: 0.3
        }}>
          <nav>
            <a href="/" style={{ color: "#fff", margin: "0 26px", textDecoration: "none" }}>Home</a>
            <a href="/listings" style={{ color: "#fff", margin: "0 26px", textDecoration: "none" }}>Listings</a>
            <a href="/contact" style={{ color: "#fff", margin: "0 26px", textDecoration: "none" }}>Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
