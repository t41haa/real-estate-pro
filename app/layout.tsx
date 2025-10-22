"use client";
import React from "react";
import "./globals.css";

const navButtonStyle: React.CSSProperties = {
  background: "#fff",
  color: "#3056D3",
  border: "1.5px solid #3056D3",
  padding: "10px 26px",
  margin: "0 8px",
  fontWeight: 700,
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "1.04rem",
  boxShadow: "0 1px 4px rgba(48,86,211,0.10)",
  transition: "background 0.17s,color 0.17s",
  display: "inline-block"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // simple event handlers for hover effect since :hover doesn't work on inline styles
  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "#3056D3";
    e.currentTarget.style.color = "#fff";
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "#fff";
    e.currentTarget.style.color = "#3056D3";
  };

  return (
    <>
      <header style={{
        background: "#3056D3",
        color: "#fff",
        padding: "18px 0",
        boxShadow: "0 2px 8px rgba(32,64,128,0.10)",
        marginBottom: "10px"
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ fontWeight: 800, fontSize: "1.3rem", letterSpacing: ".5px" }}>
            <a href="/" style={{ color: "#fff" }}>Real Estate Pro</a>
          </div>
          <nav>
            <a
              href="/"
              style={navButtonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >Home</a>
            <a
              href="/listings"
              style={navButtonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >Listings</a>
            <a
              href="/contact"
              style={navButtonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >Contact</a>
          </nav>
        </div>
      </header>
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <footer style={{
        background: "#e8eaf6",
        textAlign: "center",
        color: "#777",
        padding: "20px 0",
        marginTop: "38px"
      }}>
        &copy; {new Date().getFullYear()} Real Estate Pro | All rights reserved.
      </footer>
    </>
  );
}
