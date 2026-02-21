export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(to right, #111, #222)",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Country Roads Floor Inspection
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
          Independent and Unbiased Floor Covering Inspection Services
          for Retailers, Manufacturers, and Homeowners.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "34px" }}>Professional Flooring Inspections</h2>

        <p style={{ marginTop: "20px", lineHeight: "1.7", fontSize: "18px" }}>
          We provide comprehensive inspection services for carpet, hardwood,
          laminate, luxury vinyl plank (LVP), and tile installations.
          Our reports evaluate installation quality, manufacturing defects,
          site conditions, and performance-related concerns.
        </p>

        <p style={{ marginTop: "20px", lineHeight: "1.7", fontSize: "18px" }}>
          Each inspection includes detailed documentation, moisture testing
          when required, and photographic evidence supporting our findings.
        </p>
      </section>

      {/* SERVICE AREAS */}
      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>Service Areas</h2>

          <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
            Winchester, VA <br />
            Frederick, MD <br />
            Hagerstown, MD <br />
            Washington, DC <br />
            Baltimore, MD
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "50px" }}>
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
      height: "320px",
      objectFit: "cover",
      borderRadius: "14px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    }}
  />
))}

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Schedule an Inspection
        </h2>

        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto 30px" }}>
          Retailers, manufacturers, and homeowners may contact directly
          for inspection scheduling or report clarification.
        </p>

        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          📞 (304-703-9675)
        </p>

        <p style={{ marginTop: "15px", fontSize: "16px", opacity: 0.8 }}>
          Serving Virginia, Maryland & Washington, DC
        </p>
      </section>

    </main>
  );
}


