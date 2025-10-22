"use client";
import React from "react";

const featuredListings = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    price: "₹2.3 Crore",
    location: "Juhu, Mumbai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    beds: 4,
    baths: 3,
  },
  {
    id: 2,
    title: "Highrise Apartment",
    price: "₹1.1 Crore",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1542089363-7b7a5e43b07e",
    beds: 3,
    baths: 2,
  },
  {
    id: 3,
    title: "Family Home in Pune",
    price: "₹78 Lakh",
    location: "Viman Nagar, Pune",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    beds: 2,
    baths: 2,
  }
];


export default function Home() {
  return (
    <main style={{ fontFamily: "Inter,sans-serif", background: "#F7F9FC", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <section style={{
        background: "linear-gradient(90deg, #3056D3 60%, #fff 100%)",
        color: "#fff", padding: "48px 0 36px 0",
      }}>
        <div style={{
          maxWidth: "900px", margin: "0 auto", display: "flex",
          flexDirection: "column", alignItems: "center"
        }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 12 }}>
            Find Your Dream Property
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: 36, maxWidth: 540 }}>
            List, browse, and search for homes, apartments, and commercial spaces across India. 
            Discover premium listings and connect with agents instantly.
          </p>
          <form style={{
            background: "#fff", padding: "14px 18px", borderRadius: "1rem",
            display: "flex", gap: 8, minWidth: 370,
            boxShadow: "0 4px 16px rgba(0,32,128,0.12)"
          }}>
            <input
              type="text"
              placeholder="Search by city, locality, or landmark"
              style={{
                flex: 1, padding: "11px", border: "none", fontSize: "1rem",
                borderRadius: "0.5rem"
              }}
            />
            <button type="submit"
              style={{
                background: "#3056D3", color: "#fff", fontWeight: "bold",
                border: "none", padding: "10px 22px", borderRadius: "0.5rem",
                cursor: "pointer"
              }}
            >Search</button>
          </form>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section style={{ maxWidth: 1100, margin: "36px auto", padding: "24px 0" }}>
        <h2 style={{
          fontSize: "1.65rem", fontWeight: 700, marginBottom: "24px", textAlign: "center",
          color: "#232323"
        }}>Featured Listings</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "34px",
        }}>
          {featuredListings.map((listing, idx) => (
            <div key={idx} style={{
              background: "#fff", borderRadius: "1.1rem",
              boxShadow: "0 6px 25px rgba(0,32,128,0.16)", overflow: "hidden"
            }}>
              <img
                src={listing.image}
                alt={listing.title}
                style={{ width: "100%", height: "210px", objectFit: "cover" }}
              />
              <div style={{ padding: "16px 18px 9px 18px" }}>
                <h3 style={{ fontSize: "1.19rem", fontWeight: 600, margin: "0 0 4px 0" }}>
                  {listing.title}
                </h3>
                <p style={{ color: "#3056D3", fontWeight: "bold", fontSize: "1rem" }}>{listing.price}</p>
                <p style={{ fontSize: "0.98rem", color: "#606060", margin: "8px 0" }}>
                  {listing.location}
                </p>
                <p style={{ fontSize: "0.95rem", color: "#232323", margin: 0 }}>
                  <span role="img" aria-label="bed">🛏</span> {listing.beds} &nbsp;
                  <span role="img" aria-label="bath">🛁</span> {listing.baths}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENT / CONTACT SECTION */}
      <section style={{ background: "#fff", padding: "32px 0", borderTop: "1px solid #e6e6e6" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 8 }}>Are you an agent?</h3>
          <p style={{ color: "#4d4d4d", marginBottom: 18 }}>
            Register and list your properties or reach targeted buyers in seconds.
          </p>
          <a
            href="/contact"
            style={{
              background: "#3056D3", color: "#fff", borderRadius: "0.7rem",
              padding: "11px 26px", textDecoration: "none", fontWeight: "bold", fontSize: "1.04rem"
            }}
          >
            Become an Agent
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "26px 0 18px 0", textAlign: "center", color: "#777" }}>
        &copy; {new Date().getFullYear()} My Real Estate Platform &nbsp;|&nbsp; All rights reserved.
      </footer>
    </main>
  );
}
