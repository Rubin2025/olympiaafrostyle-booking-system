import hero from "../assets/hero.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ fontFamily: "sans-serif", color: "white" }}>

      {/* NAVBAR */}
      <nav style={nav}>
        <h2 style={{ color: "#ec4899" }}>AfroStyle</h2>

        {/* DESKTOP MENU */}
        <div style={menuDesktop}>
          <Link style={link} to="/">Home</Link>
          <Link style={link} to="/gallery">Gallery</Link>
          <Link style={link} to="/book">Book</Link>
          <Link style={link} to="/contact">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <div style={hamburger} onClick={() => setOpen(!open)}>
          ☰
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div style={mobileMenu}>
          <Link style={link} to="/">Home</Link>
          <Link style={link} to="/gallery">Gallery</Link>
          <Link style={link} to="/book">Book</Link>
          <Link style={link} to="/contact">Contact</Link>
        </div>
      )}


      {/* HERO */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Olympia AfroStyle
        </h1>

        <p style={{ opacity: 0.9 }}>
          Hair services for friends, family & community
        </p>

        <Link to="/book">
          <button style={button}>Book Appointment</button>
        </Link>
      </section>
      {/* SERVICES SECTION */}
<section style={servicesSection}>
  <h2 style={servicesTitle}>Our Styles</h2>

  <div style={servicesGrid}>
    <div style={card}>Braids</div>
    <div style={card}>Dreadlocks</div>
    <div style={card}>Cornrows</div>
    <div style={card}>Men Styles</div>
  </div>
</section>

    </div>
  );
}


/* STYLES */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 25px",
  background: "#020617"
};

const menuDesktop = {
  display: "flex",
  gap: 20
};

const hamburger = {
  display: "none",
  fontSize: 24,
  cursor: "pointer"
};

const mobileMenu = {
  display: "flex",
  flexDirection: "column",
  gap: 15,
  padding: 20,
  background: "#020617"
};

const link = {
  textDecoration: "none",
  color: "white"
};

const heroStyle = {
  height: "100vh",
  backgroundImage: `url(${hero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: 20
};


const button = {
  marginTop: 30,
  padding: "14px 30px",
  borderRadius: 10,
  border: "none",
  background: "#ec4899",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};
const servicesSection = {
  background: "#0a0f2c",
  padding: "60px 20px",
  textAlign: "center"
};

const servicesTitle = {
  fontSize: "2rem",
  marginBottom: 40,
  color: "white"
};

const servicesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gap: 20,
  maxWidth: 900,
  margin: "auto"
};

const card = {
  background: "#111a44",
  padding: 30,
  borderRadius: 12,
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "white"
};


