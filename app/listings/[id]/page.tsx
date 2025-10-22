"use client";
import React from "react";
import { useParams } from "next/navigation";

const propertyData = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    price: "₹2.3 Crore",
    location: "Juhu, Mumbai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    beds: 4,
    baths: 3,
    area: "5800 sq ft",
    desc: "Pool, garden, modern design, sea view.",
    amenities: ["Private Pool", "Sea View", "Gated Security", "Modern Kitchen", "2-car Garage"],
  },
  {
    id: 2,
    title: "Highrise Apartment",
    price: "₹1.1 Crore",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1542089363-7b7a5e43b07e",
    beds: 3,
    baths: 2,
    area: "2150 sq ft",
    desc: "Gym, security, city view, parking included.",
    amenities: ["Gym", "24x7 Security", "Parking", "Balcony View"],
  },
  {
    id: 3,
    title: "Family Home in Pune",
    price: "₹78 Lakh",
    location: "Viman Nagar, Pune",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    beds: 2,
    baths: 2,
    area: "1430 sq ft",
    desc: "Calm neighborhood, nearby schools.",
    amenities: ["Play Garden", "Metro Nearby"],
  }
];

export default function PropertyDetails() {
  const params = useParams();
  const property = propertyData.find(p => p.id.toString() === params.id);

  if (!property) {
    return <div style={{padding:40}}>Property not found!</div>;
  }

  return (
    <main style={{ fontFamily: "Inter,sans-serif", background: "#F8FAFD", minHeight: "100vh" }}>
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
