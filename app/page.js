export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* HERO SECTION */}
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

        <p style={{ fontSize: "22px", maxWidth: "800px", margin: "0 auto 30px" }}>
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

      {/* SERVICES SECTION */}
      <section style={{ padding: "90px 20px", maxWidth: "1500px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
          Inspection Services
        </h2>

        <div style={{ lineHeight: "1.8", fontSize: "18px" }}>
          <p>• Carpet Installation & Manufacturing Issues</p>
          <p>• Hardwood Cupping, Buckling & Gapping</p>
          <p>• Luxury Vinyl Plank (LVP) Locking Failures</p>
          <p>• Laminate & Engineered Wood Defects</p>
          <p>• Tile Cracking & Subfloor Concerns</p>
          <p>• Moisture Testing & Site Condition Evaluation</p>
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "100px 20px",
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "50px" }}>
            Recent Inspection Examples
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
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
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / CREDIBILITY */}
      <section style={{ padding: "100px 20px", maxWidth: "1500px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
          Professional & Unbiased Reporting
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Each inspection includes detailed documentation, measurements,
          moisture analysis when required, and photographic evidence.
          Reports are written clearly and objectively to assist retailers,
          manufacturers, installers, and homeowners in understanding
          installation conditions and product performance.
        </p>
      </section>

      {/* CONTACT ME NOW SECTION */}
      <section
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Contact Me Now
        </h2>

        <p style={{ fontSize: "22px", marginBottom: "30px" }}>
          Schedule an inspection or request additional information.
        </p>

        <a
          href="tel:3047039675"
          style={{
            backgroundColor: "#ffffff",
            color: "#111",
            padding: "18px 40px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          📞 304-703-9675
        </a>

        <p style={{ marginTop: "30px", opacity: 0.7 }}>
          Serving Virginia • Maryland • Washington DC
        </p>
      </section>

    </main>
  );
}
