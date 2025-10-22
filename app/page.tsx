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
  },
];

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-white text-white py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Property</h1>
          <p className="max-w-xl text-lg mb-8 text-center">
            List, browse, and search for homes, apartments, and commercial spaces across India. Discover premium listings and connect with agents instantly.
          </p>
          <form className="flex w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search by city, locality, or landmark"
              className="flex-grow px-4 py-2 text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 px-6 text-white font-semibold hover:bg-blue-600 transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Featured Listings</h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-700">{listing.title}</h3>
                <p className="text-blue-600 font-bold mt-1">{listing.price}</p>
                <p className="text-gray-600 mt-2">{listing.location}</p>
                <p className="mt-4 text-gray-800">
                  Bedrooms: <span className="font-semibold">{listing.beds}</span> | Bathrooms: <span className="font-semibold">{listing.baths}</span>
                </p>
                <a
                  href={`/property/${listing.id}`}
                  className="mt-auto inline-block bg-blue-700 text-white py-2 px-5 rounded hover:bg-blue-600 transition text-center font-semibold"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENT / CONTACT SECTION */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-3">Are you an agent?</h3>
          <p className="text-gray-700 mb-6">
            Register and list your properties or reach targeted buyers in seconds.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 text-white py-3 px-8 rounded hover:bg-blue-600 font-semibold transition"
          >
            Become an Agent
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-600 border-t border-gray-300 mt-12">
        &copy; {new Date().getFullYear()} My Real Estate Platform &nbsp;|&nbsp; All rights reserved.
      </footer>
    </main>
  );
}
