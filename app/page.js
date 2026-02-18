 export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>

      {/* HERO */}
      <section style={{
        background: "#1e1e1e",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Country Roads Floor Inspection
        </h1>
        <h2 style={{ fontWeight: "normal", marginBottom: "20px" }}>
          5-Star Rated CFIU Certified Floor Inspector in West Virginia
        </h2>
        <p style={{ maxWidth: "750px", margin: "0 auto 30px auto" }}>
          Based in Romney, WV and serving a 3-hour radius.
          Over 10 years of professional hardwood, laminate,
          vinyl plank, and carpet installation experience.
        </p>
        <a href="tel:13047039675"
          style={{
            background: "#d4af37",
            color: "#000",
            padding: "15px 25px",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "5px"
          }}>
          Call (304) 703-9675
        </a>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
        <h2>Top-Rated Floor Inspector on Google</h2>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          ⭐⭐⭐⭐⭐ 5.0 Star Rating (10 Google Reviews)
        </p>
        <p>
          Trusted by homeowners, contractors, retailers, and manufacturers
          throughout West Virginia for accurate, unbiased inspection reports.
        </p>
      </section>

      {/* AUTHORITY SECTION */}
      <section style={{ background: "#f4f4f4", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2>Professional Floor Inspection Services</h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>CFIU Certified Soft Surface & Hard Surface Inspector</li>
            <li>10+ Years Hands-On Installation Experience</li>
            <li>Hardwood, Laminate, Vinyl Plank & Carpet Systems</li>
            <li>Moisture Testing & Subfloor Analysis</li>
            <li>Unbiased Third-Party Inspection Reports</li>
            <li>Installation & Product Failure Investigations</li>
          </ul>
        </div>
      </section>

      {/* SERVICE AREA SEO */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2>Serving West Virginia & Surrounding Areas</h2>
        <p>
          Based in Romney, West Virginia and servicing approximately
          a 3-hour radius including:
        </p>
        <p>
          Charleston WV, Morgantown WV, Martinsburg WV, Clarksburg WV,
          Parkersburg WV, Beckley WV, Huntington WV, Wheeling WV,
          Fairmont WV and surrounding communities.
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{
        background: "#1e1e1e",
        color: "white",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2>Need a Certified Floor Inspection?</h2>
        <p>
          Call today to schedule a professional inspection report.
        </p>
        <a href="tel:13047039675"
          style={{
            background: "#d4af37",
            color: "#000",
            padding: "15px 25px",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "5px"
          }}>
          Call (304) 703-9675
        </a>
      </section>

      {/* SEO FOOTER */}
      <footer style={{
        background: "#111",
        color: "#aaa",
        padding: "30px 20px",
        textAlign: "center",
        fontSize: "14px"
      }}>
        Country Roads Floor Inspection | Romney, West Virginia |
        Phone: (304) 703-9675 |
        5-Star Rated CFIU Certified Floor Inspector Serving West Virginia
      </footer>

    </main>
  );
}
