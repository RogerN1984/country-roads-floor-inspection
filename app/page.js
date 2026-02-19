export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO SECTION */}
      <section style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Country Roads Floor Inspection
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          Independent Floor Covering Inspection Services for Retailers,
          Manufacturers, and Homeowners.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2>Professional Floor Inspections</h2>
        <p style={{ lineHeight: "1.6", marginTop: "20px" }}>
          We provide detailed and unbiased flooring inspections for carpet,
          hardwood, laminate, vinyl, and tile installations. Our evaluations
          include installation concerns, manufacturing defects, site
          conditions, and performance-related issues.
        </p>

        <p style={{ lineHeight: "1.6", marginTop: "20px" }}>
          Common inspection concerns include pulled tufts, seam issues,
          peaking, buckling, moisture-related problems, and premature wear.
          Each inspection includes thorough documentation and photographic
          evidence to support findings.
        </p>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ backgroundColor: "#f4f4f4", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2>Service Areas</h2>
          <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
            Winchester, VA <br />
            Frederick, MD <br />
            Hagerstown, MD <br />
            Washington, DC <br />
            Baltimore, MD
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Recent Inspection Photos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "/images/1-Jan 03 2026 07_46pm-kA7v.jpg",
            "/images/2-Aug 13 2025 07_55pm-7juX.jpg",
            "/images/2-Jan 03 2026 09_18pm-yQCx.jpg",
            "/images/2-Jan 30 2026 05_20pm-GK6q.jpg",
            "/images/3-Jan 03 2026 09_37pm-VenF.jpg",
            "/images/3-Jan 30 2026 05_31pm-DKpj.jpg",
            "/images/Website pic 2.jpg",
            "/images/Website pics 1.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Floor inspection"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Contact</h2>
        <p style={{ marginTop: "20px" }}>
          For inspection scheduling or questions regarding your report,
          please call or email.
        </p>
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Phone: (Your Phone Number Here)
        </p>
      </section>

    </main>
  );
}

