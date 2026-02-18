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
          5-Star CFIU Certified Floor Inspector Serving Baltimore, Washington DC & Surrounding Areas
        </h2>
        <p style={{ maxWidth: "800px", margin: "0 auto 30px auto" }}>
          Professional hardwood, laminate, vinyl plank and carpet inspection services
          across Maryland, Washington DC, Northern Virginia, and West Virginia.
          Backed by over 10 years of hands-on installation experience.
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

      {/* GOOGLE REVIEWS */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
        <h2>Top-Rated Floor Inspector on Google</h2>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          ⭐⭐⭐⭐⭐ 5.0 Star Rating (10 Google Reviews)
        </p>
        <p>
          Trusted by homeowners, contractors, retailers, and manufacturers
          throughout Baltimore MD, Washington DC, Winchester VA,
          and West Virginia.
        </p>
      </section>

      {/* AUTHORITY */}
      <section style={{ background: "#f4f4f4", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2>Professional Floor Inspection Services</h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>CFIU Certified Soft Surface & Hard Surface Inspector</li>
            <li>10+ Years Hands-On Installation Experience</li>
            <li>Hardwood, Engineered Wood & Moisture Failure Analysis</li>
            <li>Laminate & Vinyl Plank System Evaluation</li>
            <li>Carpet & Soft Surface Inspections</li>
            <li>Unbiased Third-Party Inspection Reports</li>
          </ul>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2>Service Areas</h2>
        <p>
          Primary service areas include Baltimore, Maryland and Washington DC,
          with frequent inspections performed in Winchester, Virginia.
        </p>
        <p>
          Also serving a 3-hour radius from Romney, West Virginia including
          Charleston WV, Morgantown WV, Martinsburg WV, Clarksburg WV,
          Parkersburg WV, Beckley WV, Huntington WV, Wheeling WV and
          surrounding communities.
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
          Call today to schedule your professional inspection.
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

      {/* FOOTER SEO */}
      <footer style={{
        background: "#111",
        color: "#aaa",
        padding: "30px 20px",
        textAlign: "center",
        fontSize: "14px"
      }}>
        Country Roads Floor Inspection |
        5-Star CFIU Certified Floor Inspector |
        Serving Baltimore MD, Washington DC, Winchester VA & West Virginia |
        Phone: (304) 703-9675
      </footer>

    </main>
  );
}
