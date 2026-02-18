export default function Home() {
  return (
    <main style={{ padding: "80px 20px", maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
      
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Certified Floor Inspector Serving MD, DC, VA & WV
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        5-Star CFIU Certified Inspector with 10+ Years of Installation Experience.
        Unbiased Third-Party Reports for Hardwood, LVP, Laminate & Carpet.
      </p>

      <a
        href="tel:13047039675"
        style={{
          background: "#d4af37",
          color: "#111",
          padding: "15px 30px",
          fontSize: "20px",
          fontWeight: "bold",
          textDecoration: "none",
          borderRadius: "6px"
        }}
      >
        Call Now: (304) 703-9675
      </a>

      <p style={{ marginTop: "25px", fontWeight: "bold" }}>
        ⭐⭐⭐⭐⭐ 5-Star Rated on Google
      </p>

      <div style={{ marginTop: "70px", textAlign: "left" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Why Hire a Certified Floor Inspector?
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>✔ Certified CFIU Inspector</li>
          <li>✔ 10+ Years Flooring Installation Experience</li>
          <li>✔ Unbiased Third-Party Inspection Reports</li>
          <li>✔ Detailed Moisture & Subfloor Testing</li>
          <li>✔ Trusted by Homeowners, Contractors & Attorneys</li>
        </ul>
      </div>

      <div style={{ marginTop: "70px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Request an Inspection
        </h2>

        <form
          action="https://formsubmit.co/rogerlnestor@gmail.com"
          method="POST"
          style={{ maxWidth: "600px", margin: "auto", textAlign: "left" }}
        >
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
          />

          <textarea
            name="message"
            placeholder="Briefly describe the flooring issue..."
            rows="4"
            required
            style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#111",
              color: "#fff",
              padding: "15px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "6px"
            }}
          >
            Submit Inspection Request
          </button>
        </form>
      </div>

    </main>
  );
}
