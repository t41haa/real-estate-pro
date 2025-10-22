"use client";
import React from "react";

const propertyListings = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    price: "₹2.3 Crore",
    location: "Juhu, Mumbai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
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
    image: "https://images.unsplash.com/photo-1542089363-7b7a5e43b07e",
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
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    beds: 2,
    baths: 2,
    area: "1430 sq ft",
    desc: "Calm neighborhood, nearby schools."
  }
];

export default function ListingsPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <section className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-10">
          Browse All Properties
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyListings.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-blue-700">{property.title}</h2>
                <p className="text-blue-600 font-bold mt-1">{property.price}</p>
                <p className="text-gray-600 mt-1">{property.location}</p>
                <p className="mt-2 text-gray-700">
                  Bedrooms: <span className="font-semibold">{property.beds}</span> | Bathrooms: <span className="font-semibold">{property.baths}</span> | Area: <span className="font-semibold">{property.area}</span>
                </p>
                <p className="text-gray-600 mt-3">{property.desc}</p>
                <a
                  href={`/property/${property.id}`}
                  className="mt-auto inline-block bg-blue-700 text-white rounded-md px-5 py-2 text-center font-semibold hover:bg-blue-600 transition mt-6"
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
