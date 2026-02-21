import { useState } from "react";
import { NavLink } from "react-router-dom";

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

        <NavLink to="/" style={navLink} onClick={()=>setOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/gallery" style={navLink} onClick={()=>setOpen(false)}>
          Gallery
        </NavLink>

        <NavLink to="/contact" style={navLink} onClick={()=>setOpen(false)}>
          Contact
        </NavLink>

        {/* BOOK BUTTON */}
        <NavLink to="/book" style={bookBtn} onClick={()=>setOpen(false)}>
          Book
        </NavLink>

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
  padding:"10px 22px",   // 👈 reduced height
  background:"#020617",
  position:"sticky",
  top:0,
  zIndex:999
};

const logo={
  color:"#ec4899",
  fontWeight:"bold",
  fontSize:"1.2rem" // smaller logo
};

const links={
  display:"flex",
  gap:18,
  alignItems:"center"
};


/* LINKS */

const navLink = ({isActive}) => ({
  color: isActive ? "#ec4899" : "#e5e7eb",
  textDecoration:"none",
  fontWeight:"500",
  fontSize:"0.95rem",
  transition:"0.25s"
});


/* BOOK BUTTON */

const bookBtn={
  background:"#ec4899",
  color:"white",
  padding:"6px 14px",
  borderRadius:8,
  textDecoration:"none",
  fontWeight:"600",
  fontSize:"0.85rem",
  boxShadow:"0 0 10px rgba(236,72,153,0.5)"
};


/* MENU ICON */

const menuBtn={
  fontSize:24,
  cursor:"pointer",
  display:"none",
  color:"white"
};


/* MOBILE */

if(typeof window !== "undefined"){
  const style=document.createElement("style");
  style.innerHTML=`
    @media (max-width:768px){
      nav div[style*="gap: 18px"]{
        display:none !important;
      }
      nav div[style*="font-size: 24px"]{
        display:block !important;
      }
    }
  `;
  document.head.appendChild(style);
}


/* MOBILE DROPDOWN */

const mobileMenu={
  position:"absolute",
  top:"55px",
  right:0,
  flexDirection:"column",
  background:"#020617",
  width:"190px",
  padding:"20px",
  gap:"18px",
  display:"flex",
  boxShadow:"0 10px 30px rgba(0,0,0,0.5)"
};