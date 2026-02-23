"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(to right, #111, #222)",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
          Country Roads Floor Inspection
        </h1>
        <p style={{ fontSize: "22px", marginBottom: "30px" }}>
          Independent • Unbiased • Professional Floor Covering Inspections
        </p>
        <a
          href="tel:3047039675"
          style={{
            backgroundColor: "#ffffff",
            color: "#111",
            padding: "15px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Call Now
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", textAlign: "center" }}>
          Inspection Services
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>Carpet Installation & Manufacturing Issues</li>
          <li>Hardwood Cupping, Buckling & Gapping</li>
          <li>Luxury Vinyl Plank (LVP) Locking Failures</li>
          <li>Laminate & Engineered Wood Defects</li>
          <li>Tile Cracking & Subfloor Concerns</li>
          <li>Moisture Testing & Site Condition Evaluation</li>
        </ul>
      </section>

      {/* GALLERY */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px" }}>
            Recent Inspection Examples
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              "/images/inspection-1.jpg.jpg",
              "/images/inspection-2.jpg.jpg",
              "/images/inspection-3.jpg.jpg",
              "/images/inspection-4.jpg.jpg",
              "/images/inspection-5.jpg.jpg",
              "/images/inspection-6.jpg.jpg",
              "/images/inspection-7.jpg.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Floor inspection example"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ padding: "100px 20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "25px", textAlign: "center" }}>
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input name="name" placeholder="Your Name" required style={inputStyle} />
          <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
          <input name="phone" placeholder="Phone (optional)" style={inputStyle} />
          <textarea name="message" placeholder="Your Message" required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>

        {status && <p style={{ marginTop: "15px" }}>{status}</p>}
      </section>

      {/* FOOTER */}
      <section
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <p>📞 304-703-9675</p>
        <p>Serving Virginia • Maryland • Washington DC</p>
      </section>

    </main>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "14px",
  backgroundColor: "#111",
  color: "white",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

