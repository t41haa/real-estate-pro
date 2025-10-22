"use client";
import React from "react";

const featuredListings = [
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

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "#F7F9FC", minHeight: "100vh" }}>
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
          <p style={{ fontSize: "1.2rem", marginBottom: 36, maxWidth: 540, color: "#f3f3f3" }}>
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
                  Bedrooms: {listing.beds} | Bathrooms: {listing.baths}
                </p>
                <a
                  href={`/property/${listing.id}`}
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
      {/* Other sections... */}
    </main>
  );
}
