export const metadata = {
  title: "Country Roads Floor Inspection",
  description: "CFIU Certified Hardwood & Carpet Floor Inspector serving West Virginia."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
