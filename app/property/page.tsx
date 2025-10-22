"use client";
import React from "react";

// Dummy property data (for demo: you can link this to real data later)
const property = {
  title: "Luxury Villa in Mumbai",
  price: "₹2.3 Crore",
  location: "Juhu, Mumbai",
  image: "https://is1-3.housingcdn.com/01c16c28/1cd938ae2862861c04d70be84e386120/v0/medium/3_bhk_apartment-for-rent-juhu-Mumbai-hall.jpg",
  beds: 4,
  baths: 3,
  area: "5800 sq ft",
  desc: "This stunning luxury villa offers modern design, a beautiful sea view, an outdoor pool, garden, and close proximity to Juhu Beach. Perfect for family life and entertaining guests.",
  amenities: [
    "Private Pool", "Sea View", "Gated Security", "Modern Kitchen", "2-car Garage"
  ]
};

export default function PropertyDetails() {
  return (
    <main style={{
      fontFamily: "Inter,sans-serif", background: "#F8FAFD", minHeight: "100vh"
    }}>
      <section style={{
        maxWidth: 900, margin: "40px auto 0 auto", background: "#fff", borderRadius: "1.2rem",
        boxShadow: "0 8px 30px rgba(32,64,128,0.13)", overflow: "hidden"
      }}>
        <img
          src={property.image}
          alt={property.title}
          style={{ width: "100%", maxHeight: "330px", objectFit: "cover" }}
        />
        <div style={{ padding: "32px 30px 18px 30px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#3056D3" }}>{property.title}</h1>
          <p style={{ color: "#3056D3", fontSize: "1.15rem", fontWeight: "bold", marginTop: 4 }}>{property.price}</p>
          <p style={{ color: "#6d6d6d", fontSize: "1.09rem" }}>{property.location}</p>
          <div style={{ margin: "18px 0" }}>
            <span style={{ marginRight: 16 }}>🛏 {property.beds} Beds</span>
            <span style={{ marginRight: 16 }}>🛁 {property.baths} Bath</span>
            <span>📐 {property.area}</span>
          </div>
          <p style={{ fontSize: "1.09rem", color: "#222", margin: "12px 0 18px 0" }}>{property.desc}</p>
          <h3 style={{ fontSize: "1.09rem", fontWeight: 600, margin: "18px 0 8px 0", color: "#333" }}>Amenities:</h3>
          <ul style={{ display: "flex", flexWrap: "wrap", padding: 0, listStyle: "none", gap: "13px" }}>
            {property.amenities.map((a, i) => (
              <li key={i}
                style={{
                  background: "#eef3fa",
                  color: "#3056D3",
                  borderRadius: "7px",
                  padding: "7px 17px",
                  fontSize: "0.98rem"
                }}>
                {a}
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            style={{
              background: "#3056D3", color: "#fff", borderRadius: "0.7rem",
              padding: "12px 32px", textDecoration: "none",
              fontWeight: "bold", fontSize: "1.05rem", display: "inline-block", marginTop: 26
            }}
          >
            Contact Agent
          </a>
        </div>
      </section>
    </main>
  );
}
