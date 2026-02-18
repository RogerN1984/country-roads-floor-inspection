export const metadata = {
  title: "Country Roads Floor Inspection",
  description:
    "5-Star CFIU Certified Floor Inspector serving Baltimore MD, Washington DC, Winchester VA and West Virginia."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        {/* NAVIGATION */}
        <nav style={{
          background: "#111",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px"
        }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/baltimore-floor-inspector" style={{ color: "white", textDecoration: "none" }}>Baltimore MD</a>
          <a href="/washington-dc-floor-inspector" style={{ color: "white", textDecoration: "none" }}>Washington DC</a>
          <a href="/winchester-va-floor-inspector" style={{ color: "white", textDecoration: "none" }}>Winchester VA</a>
          <a href="tel:13047039675" style={{ color: "#d4af37", textDecoration: "none", fontWeight: "bold" }}>
            Call Now
          </a>
        </nav>

        {children}

      </body>
    </html>
  );
}
