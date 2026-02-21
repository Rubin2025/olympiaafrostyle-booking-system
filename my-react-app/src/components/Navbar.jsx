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
          Book Appointment
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
  padding:"15px 30px",
  background:"#020617",
  position:"sticky",
  top:0,
  zIndex:999
};

const logo={
  color:"#ec4899",
  fontWeight:"bold"
};

const links={
  display:"flex",
  gap:25,
  alignItems:"center"
};


/* NORMAL LINKS */

const navLink = ({isActive}) => ({
  color: isActive ? "#ec4899" : "#e5e7eb",
  textDecoration:"none",
  fontWeight:"500",
  transition:"0.3s"
});


/* BOOK BUTTON LINK */

const bookBtn={
  background:"#ec4899",
  color:"white",
  padding:"10px 18px",
  borderRadius:10,
  textDecoration:"none",
  fontWeight:"bold",
  boxShadow:"0 0 15px rgba(236,72,153,0.6)",
  transition:"0.3s"
};


/* HAMBURGER */

const menuBtn={
  fontSize:28,
  cursor:"pointer",
  display:"none",
  color:"white"
};



/* MOBILE STYLE */

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
  top:"70px",
  right:0,
  flexDirection:"column",
  background:"#020617",
  width:"230px",
  padding:"25px",
  gap:"20px",
  display:"flex",
  boxShadow:"0 10px 30px rgba(0,0,0,0.5)"
};