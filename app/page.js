export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>

      {/* HERO SECTION */}
      <section style={{
        background: "#1e1e1e",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Country Roads Floor Inspection
        </h1>
        <h2 style={{ fontWeight: "normal", marginBottom: "20px" }}>
          CFIU Certified Hardwood & Soft Surface Floor Inspector
        </h2>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px auto" }}>
          Serving a 3-hour radius from Romney, West Virginia.
          Over 10 years of professional floor installation experience.
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

      {/* ABOUT SECTION */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2>Professional Floor Inspection Services</h2>
        <p>
          With more than a decade of hands-on installation experience,
          Country Roads Floor Inspection provides detailed, unbiased
          inspection reports for homeowners, retailers, manufacturers,
          and contractors.
        </p>
        <p>
          Certified through CFIU in soft surface and hard surface floor
          inspection standards.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ background: "#f4f4f4", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2>Inspection Services</h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>Hardwood Floor Inspections</li>
            <li>Laminate & Vinyl Plank Inspections</li>
            <li>Carpet & Soft Surface Inspections</li>
            <li>Moisture Testing & Subfloor Evaluation</li>
            <li>Installation Failure Analysis</li>
          </ul>
        </div>
      </section>

      {/* SERVICE AREA SECTION */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2>Service Area</h2>
        <p>
          Based in Romney, WV and serving Charleston, Morgantown,
          Huntington, Parkersburg, Beckley, Martinsburg, Clarksburg,
          Fairmont, Wheeling and all areas within approximately
          3 hours of Romney, West Virginia.
        </p>
      </section>

      {/* SEO SECTION */}
      <section style={{ background: "#1e1e1e", color: "white", padding: "40px 20px", textAlign: "center" }}>
        <p>
          Trusted floor inspection services across West Virginia.
          Google-reviewed, CFIU certified, and backed by 10+ years
          of installation expertise.
        </p>
      </section>

    </main>
  );
}
