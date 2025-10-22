"use client";
import React from "react";

const propertyListings = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    price: "₹2.3 Crore",
    location: "Juhu, Mumbai",
    image: "https://is1-3.housingcdn.com/01c16c28/1cd938ae2862861c04d70be84e386120/v0/medium/3_bhk_apartment-for-rent-juhu-Mumbai-hall.jpg",
    beds: 4,
    baths: 3,
    area: "5800 sq ft",
    desc: "Pool, garden, modern design, sea view."
  },
  {
    id: 2,
    title: "Highrise Apartment",
    price: "₹1.1 Crore",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1598928506312-5fb6e32ff223?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    baths: 2,
    area: "2150 sq ft",
    desc: "Gym, security, city view, parking included."
  },
  {
    id: 3,
    title: "Family Home in Pune",
    price: "₹78 Lakh",
    location: "Viman Nagar, Pune",
    image: "https://images.unsplash.com/photo-1618221502829-d51a6ec90b0d?auto=format&fit=crop&w=800&q=80",
    beds: 2,
    baths: 2,
    area: "1430 sq ft",
    desc: "Calm neighborhood, nearby schools."
  }
];

export default function ListingsPage() {
  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif", minHeight: "100vh", background: "#F5F7FF" }}>
      <section style={{ maxWidth: 1200, margin: "40px auto", padding: "0 16px" }}>
        <h1 style={{
          fontSize: "2rem", fontWeight: 800, color: "#3056D3", textAlign: "center", marginBottom: 36
        }}>
          Browse All Properties
        </h1>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px"
        }}>
          {propertyListings.map((property, idx) => (
            <div key={idx} style={{
              background: "#fff", borderRadius: "1.2rem", boxShadow: "0 6px 20px rgba(32,64,128,0.11)",
              overflow: "hidden"
            }}>
              <img
                src={property.image}
                alt={property.title}
                style={{ width: "100%", height: "190px", objectFit: "cover", borderTopLeftRadius: "1.2rem", borderTopRightRadius: "1.2rem" }}
              />
              <div style={{ padding: "22px 19px 5px 19px" }}>
                <h2 style={{ fontSize: "1.18rem", fontWeight: 600, marginTop: 0 }}>
                  {property.title}
                </h2>
                <p style={{ color: "#3056D3", fontWeight: "bold" }}>{property.price}</p>
                <p style={{ color: "#666", fontSize: "1rem", margin: "6px 0" }}>{property.location}</p>
                <p style={{ color: "#222", fontSize: "0.97rem", margin: "7px 0" }}>
                  Bedrooms: {property.beds} &nbsp;| Bathrooms: {property.baths} &nbsp;| Area: {property.area}
                </p>
                <p style={{ color: "#444", fontSize: "0.99rem" }}>{property.desc}</p>
                <a
                  href={`/property/${property.id}`}
                  style={{
                    background: "#3056D3", color: "#fff", borderRadius: "0.65rem",
                    padding: "8px 22px", textDecoration: "none", fontWeight: "bold",
                    display: "inline-block", margin: "18px 0 10px 0"
                  }}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
