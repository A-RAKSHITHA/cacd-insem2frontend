import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);

  const retrieveAllEvents = async () => {
    // Mock data with working images
    const mockEvents = [
      {
        id: 1,
        name: "Beach Festival",
        location: "Goa",
        date: "2025-12-10",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",
        description: "Enjoy music, sand, and sunshine at Goa’s biggest beach festival!",
      },
      {
        id: 2,
        name: "Music Night",
        location: "Hyderabad",
        date: "2025-12-22",
        image:
          "https://images.unsplash.com/photo-1598346762291-aee88549193f?auto=format&fit=crop&w=900&q=60",
        description: "A night full of energy and live performances by top artists.",
      },
      {
        id: 3,
        name: "Food Carnival",
        location: "Bangalore",
        date: "2026-01-15",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=60",
        description: "Taste dishes from around the world at the Bangalore Food Carnival.",
      },
      {
        id: 4,
        name: "Cultural Fest",
        location: "Chennai",
        date: "2026-02-05",
        image:
          "https://images.unsplash.com/photo-1587574293340-e0011c87b4ea?auto=format&fit=crop&w=900&q=60",
        description: "Experience Tamil Nadu’s rich culture and traditions at this grand event.",
      },
    ];
    setEvents(mockEvents);
  };

  const retrieveAllLocations = async () => {
    const mockLocations = [
      {
        id: 1,
        name: "Goa",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=60",
      },
      {
        id: 2,
        name: "Hyderabad",
        image:
          "https://images.unsplash.com/photo-1600959907703-4d8b934f7030?auto=format&fit=crop&w=900&q=60",
      },
      {
        id: 3,
        name: "Bangalore",
        image:
          "https://images.unsplash.com/photo-1616587894612-4b3c66ef3e1b?auto=format&fit=crop&w=900&q=60",
      },
      {
        id: 4,
        name: "Chennai",
        image:
          "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=900&q=60",
      },
    ];
    setLocations(mockLocations);
  };

  useEffect(() => {
    retrieveAllEvents();
    retrieveAllLocations();
  }, []);

  return (
    <div style={{ padding: "40px", backgroundColor: "#fafafa", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>
        🌟 Upcoming Events
      </h1>

      {/* Events Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={event.image}
              alt={event.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 10px", color: "#222" }}>{event.name}</h3>
              <p style={{ margin: "0", color: "#666" }}>
                📍 {event.location} | 📅 {event.date}
              </p>
              <p style={{ marginTop: "10px", color: "#555", fontSize: "14px" }}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Locations Section */}
      <h2 style={{ textAlign: "center", color: "#333", margin: "50px 0 20px" }}>
        📍 Popular Locations
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {locations.map((loc) => (
          <div
            key={loc.id}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={loc.image}
              alt={loc.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                textAlign: "center",
                padding: "8px 0",
                fontWeight: "bold",
              }}
            >
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
