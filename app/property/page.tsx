"use client";
import React from "react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    price: "₹2.3 Crore",
    location: "Juhu, Mumbai",
    image: "https://thvnext.bing.com/th/id/OIP.1vpw2ZqIpB5TkRSTCEJ9NQAAAA?w=226&h=180&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3",
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
    image: "https://mediacdn.99acres.com/media1/22491/1/449821296M-1696753337707.jpg",
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
    image: "https://is1-2.housingcdn.com/01c16c28/ea4e6aa18e415e0a35ad6270e77f67c4/v0/medium/3_bhk_apartment-for-rent-juhu-Mumbai-hall.jpg",
    beds: 2,
    baths: 2,
    area: "1430 sq ft",
    desc: "Calm neighborhood, nearby schools."
  }
];

export default function PropertyDetailPage({ id }: { id: number }) {
  // find property by id
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <main style={{ fontFamily: "Arial, Helvetica, sans-serif", padding: 40 }}>
        <h2>Property not found</h2>
      </main>
    );
  }

  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "#f7f9fc", minHeight: "100vh", padding: 40 }}>
      <section style={{
        maxWidth: 900,
        margin: "0 auto",
        background: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(32,64,128,0.13)",
        padding: 32,
        display: "flex",
        gap: 32
      }}>
        <img
          src={property.image}
          alt={property.title}
          style={{
            width: "400px", height: "260px", objectFit: "cover",
            borderRadius: "0.7rem",
            boxShadow: "0 1px 7px rgba(48,86,211,0.09)"
          }}
        />
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8, color: "#3056D3" }}>
            {property.title}
          </h1>
          <p style={{ fontWeight: "bold", fontSize: "1.15rem", color: "#3056D3" }}>{property.price}</p>
          <p style={{ fontSize: "1rem", color: "#444", marginTop: 16 }}>{property.location}</p>
          <p style={{ fontSize: "1.05rem", color: "#232323", marginTop: 12 }}>
            Bedrooms: {property.beds} | Bathrooms: {property.baths} | Area: {property.area}
          </p>
          <p style={{ fontSize: "1rem", marginTop: 16, lineHeight: 1.45 }}>
            {property.desc}
          </p>
          <a href="/contact" style={{
            display: "inline-block",
            marginTop: 24,
            padding: "10px 26px",
            borderRadius: "0.6rem",
            backgroundColor: "#3056D3",
            color: "#fff",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 1px 7px rgba(48,86,211,0.12)"
          }}>
            Contact Agent
          </a>
        </div>
      </section>
    </main>
  );
}
