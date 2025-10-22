"use client";
import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
            <a href="/" style={{ margin: "0 18px" }}>Home</a>
            <a href="/listings" style={{ margin: "0 18px" }}>Listings</a>
            <a href="/contact" style={{ margin: "0 18px" }}>Contact</a>
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
