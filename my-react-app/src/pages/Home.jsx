import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", color: "#fff", background: "#0f172a" }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#020617",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#f472b6" }}>Olympia AfroStyle</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={link}>Home</Link>
          <Link to="/gallery" style={link}>Gallery</Link>
          <Link to="/book" style={link}>Book</Link>
          <Link to="/contact" style={link}>Contact</Link>
        </div>
      </nav>


      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1595475038665-8b1c4a3d1d3c')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem" }}>Welcome to Olympia AfroStyle</h1>
        <p style={{ marginTop: 10, opacity: 0.8 }}>
          Hair services for friends, family & community
        </p>

        <Link to="/book">
          <button style={button}>
            Book Appointment
          </button>
        </Link>
      </section>


      {/* MOTIVATION SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Celebrate Your Natural Beauty</h2>
        <p style={{ maxWidth: 600, margin: "20px auto", opacity: 0.8 }}>
          Every hairstyle tells a story. Choose your style, book your time,
          and walk out confident.
        </p>
      </section>


      {/* STYLE CATEGORIES */}
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
        padding: "20px"
      }}>
        {["Braids", "Twists", "Cornrows", "Men Styles", "Custom"].map(styleName => (
          <div key={styleName} style={card}>
            {styleName}
          </div>
        ))}
      </section>


      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>Ready for your next hairstyle?</h2>

        <Link to="/book">
          <button style={button}>
            Book Now
          </button>
        </Link>
      </section>


      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: 20,
        background: "#020617",
        marginTop: 40
      }}>
        © Olympia AfroStyle — Community Hair Services
      </footer>

    </div>
  );
}


/* STYLES */

const link = {
  textDecoration: "none",
  color: "white",
  fontSize: 14
};

const button = {
  marginTop: 25,
  padding: "12px 25px",
  borderRadius: 8,
  border: "none",
  background: "#ec4899",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

const card = {
  background: "#1e293b",
  padding: "15px 25px",
  borderRadius: 12,
  cursor: "pointer",
  transition: "0.2s",
  fontWeight: "bold"
};
