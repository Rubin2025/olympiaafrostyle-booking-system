import hero from "../assets/hero.png";
import braids from "../assets/braids.png";
import dreads from "../assets/dreads.png";
import cornrows from "../assets/cornrows.png";
import men from "../assets/men.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  return (
    <div style={page}>

      {/* HERO */}
      <section style={heroStyle}>
        <div style={overlay}/>
        <div style={heroContent}>
          <h1 style={title}>Olympia AfroStyle</h1>

          <p style={subtitle}>
            Look good. Feel confident. Stand out. Book or Contact us now to secure your slot.
          </p>

          <Link to="/book">
            <button style={button}>Book Appointment</button>
          </Link>
        </div>
      </section>


      {/* SERVICES */}
      <section style={servicesSection}>
        <h2 style={servicesTitle}>Our Styles</h2>

        <div style={grid}>
          <Card title="Braids" img={braids}/>
          <Card title="Dreadlocks" img={dreads}/>
          <Card title="Cornrows" img={cornrows}/>
          <Card title="Men Styles" img={men}/>
        </div>
      </section>

    </div>
  );
}


/* CARD COMPONENT */
function Card({title,img}) {

  const [hover,setHover] = useState(false);

  return (
    <div
      style={{
        ...card,
        transform: hover ? "translateY(-10px)" : "translateY(0)",
        boxShadow: hover
          ? "0 15px 40px rgba(236,72,153,0.4)"
          : "0 5px 15px rgba(0,0,0,0.3)"
      }}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >

      <h3>{title}</h3>

      <div style={imgWrapper}>
        <img
          src={img}
          alt={title}
          style={{
            ...image,
            transform: hover ? "scale(1.1)" : "scale(1)"
          }}
        />
      </div>

    </div>
  );
}



/* STYLES */

const page={
  fontFamily:"sans-serif",
  color:"white"
};


/* HERO */

const heroStyle={
  position:"relative",
  minHeight:"100vh",
  backgroundImage:`url(${hero})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  textAlign:"center",
  padding:"20px"
};

const overlay={
  position:"absolute",
  inset:0,
  background:"rgba(0,0,0,0.45)",
  pointerEvents:"none"   // ← ONLY LINE ADDED (fix for phone click issue)
};

const heroContent={
  position:"relative",
  maxWidth:700
};

const title={
  fontSize:"clamp(2rem,5vw,3rem)",
  marginBottom:15
};

const subtitle={
  fontSize:"clamp(1rem,2.5vw,1.2rem)"
};

const button={
  marginTop:30,
  padding:"14px 32px",
  borderRadius:10,
  border:"none",
  background:"#ec4899",
  color:"white",
  fontWeight:"bold",
  cursor:"pointer",
  transition:"0.3s",
  boxShadow:"0 0 15px rgba(236,72,153,0.5)"
};


/* SERVICES */

const servicesSection={
  background:"#0a0f2c",
  padding:"60px 20px",
  textAlign:"center"
};

const servicesTitle={
  fontSize:"clamp(1.8rem,4vw,2.3rem)",
  marginBottom:40
};

const grid={
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",
  gap:25,
  maxWidth:1000,
  margin:"auto"
};

const card={
  background:"#111a44",
  padding:20,
  borderRadius:16,
  display:"flex",
  flexDirection:"column",
  gap:15,
  alignItems:"center",
  transition:"0.35s ease"
};


/* IMAGE DISPLAY */

const imgWrapper={
  width:"100%",
  height:220,
  overflow:"hidden",
  borderRadius:12
};

const image={
  width:"100%",
  height:"100%",
  objectFit:"cover",
  objectPosition:"top",
  transition:"0.4s ease"
};