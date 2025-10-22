"use client";
import React from "react";

export default function ContactPage() {
  return (
    <main style={{ fontFamily: "Inter,sans-serif", minHeight: "100vh", background: "#F6F9FB" }}>
      <section style={{
        maxWidth: 600, margin: "40px auto", background: "#fff",
        padding: "40px 32px", borderRadius: "1rem",
        boxShadow: "0 4px 18px rgba(32,64,128,0.10)"
      }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#3056D3", marginBottom: 20 }}>
          Contact an Agent
        </h1>
        <form>
          <input type="text" placeholder="Your Name" style={{
            width: "100%", padding: "12px", marginBottom: 18,
            borderRadius: "0.6rem", border: "1px solid #ccc", fontSize: "1rem"
          }} />
          <input type="email" placeholder="Your Email" style={{
            width: "100%", padding: "12px", marginBottom: 18,
            borderRadius: "0.6rem", border: "1px solid #ccc", fontSize: "1rem"
          }} />
          <textarea placeholder="Message" rows={5} style={{
            width: "100%", padding: "12px", marginBottom: 18,
            borderRadius: "0.6rem", border: "1px solid #ccc", fontSize: "1rem"
          }} />
          <button type="submit" style={{
            background: "#3056D3", color: "#fff", fontWeight: "bold",
            padding: "12px 28px", borderRadius: "0.6rem",
            border: "none", fontSize: "1.06rem"
          }}>Send Message</button>
        </form>
      </section>
    </main>
  );
}
