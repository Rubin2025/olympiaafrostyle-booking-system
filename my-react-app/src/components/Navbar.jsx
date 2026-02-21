import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open,setOpen] = useState(false);

  return (
    <nav style={nav}>

      {/* LOGO */}
      <h2 style={logo}>Olympia</h2>


      {/* LINKS */}
      <div style={{
        ...links,
        ...(open ? mobileMenu : {})
      }}>
        <Link style={link} to="/" onClick={()=>setOpen(false)}>Home</Link>
        <Link style={link} to="/gallery" onClick={()=>setOpen(false)}>Gallery</Link>
        <Link style={link} to="/book" onClick={()=>setOpen(false)}>Book</Link>
        <Link style={link} to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
      </div>


      {/* HAMBURGER */}
      <div style={menuBtn} onClick={()=>setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}



/* STYLES */

const nav={
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  padding:"15px 25px",
  background:"#f41fb4",
  color:"white",
  position:"sticky",
  top:0,
  zIndex:999
};

const logo={
  color:"#ec4899"
};

const links={
  display:"flex",
  gap:25
};

const link={
  color:"white",
  textDecoration:"none",
  fontWeight:"500"
};

const menuBtn={
  fontSize:28,
  cursor:"pointer",
  display:"none"
};



/* MOBILE FIX */
if(typeof window !== "undefined"){
  const style=document.createElement("style");
  style.innerHTML=`
    @media (max-width:768px){
      nav div[style*="gap: 25px"]{
        display:none !important;
      }
      nav div[style*="font-size: 28px"]{
        display:block !important;
      }
    }
  `;
  document.head.appendChild(style);
}


/* MOBILE DROPDOWN */
const mobileMenu={
  position:"absolute",
  top:"65px",
  right:0,
  flexDirection:"column",
  background:"#c01d6e",
  width:"200px",
  padding:"25px",
  gap:"20px",
  display:"flex",
  boxShadow:"0 10px 30px rgba(225, 20, 109, 0.5)"
};