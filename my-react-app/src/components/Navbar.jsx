import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <nav style={nav}>

      {/* LOGO */}
      <div style={logo}>Afrostyle</div>

      {/* LINKS */}
      <div style={{
        ...links,
        ...(open ? mobileOpen : {})
      }}>
        
        <NavLink to="/" style={navLink} onClick={()=>setOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/book" style={navLink} onClick={()=>setOpen(false)}>
          Book
        </NavLink>

        <NavLink to="/gallery" style={navLink} onClick={()=>setOpen(false)}>
          Gallery
        </NavLink>

        <NavLink to="/contact" style={navLink} onClick={()=>setOpen(false)}>
          Contact
        </NavLink>

        {isAdmin && (
          <NavLink to="/admin" style={navLink} onClick={()=>setOpen(false)}>
            Admin
          </NavLink>
        )}

      </div>

      {/* HAMBURGER */}
      <div style={menu} onClick={()=>setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;


/* STYLES */

const nav={
  position:"sticky",
  top:0,
  zIndex:1000,
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  padding:"15px 30px",
  background:"#020617",
  color:"white",
  boxShadow:"0 3px 15px rgba(0,0,0,0.4)"
}

const logo={
  fontWeight:"bold",
  fontSize:"1.4rem",
  letterSpacing:"1px"
}

const links={
  display:"flex",
  gap:"30px",
  alignItems:"center"
}

const navLink = ({ isActive }) => ({
  color: isActive ? "#ec4899" : "white",
  textDecoration:"none",
  fontWeight:"500",
  position:"relative",
  transition:"0.3s"
})

const menu={
  display:"none",
  fontSize:"1.8rem",
  cursor:"pointer"
}


/* MOBILE MENU STYLE */

const mobileOpen={
  position:"absolute",
  top:"65px",
  right:0,
  flexDirection:"column",
  background:"#020617",
  width:"220px",
  padding:"25px",
  gap:"20px",
  display:"flex",
  boxShadow:"0 5px 20px rgba(0,0,0,0.5)"
}


/* MEDIA QUERY */

if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width:768px){
      nav div[style*="gap: 30px"]{
        display:none !important;
      }
      nav div[style*="font-size: 1.8rem"]{
        display:block !important;
      }
    }
  `;
  document.head.appendChild(style);
}