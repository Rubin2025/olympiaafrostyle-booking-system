import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      {/* LOGO */}
      <h2 className="logo">Olympia</h2>

      {/* LINKS */}
      <div className={`links ${open ? "show" : ""}`}>
        <NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink>
        <NavLink to="/gallery" onClick={()=>setOpen(false)}>Gallery</NavLink>
        <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
        <NavLink to="/book" className="book" onClick={()=>setOpen(false)}>Book</NavLink>
      </div>

      {/* MENU BUTTON */}
      <div className="menu" onClick={()=>setOpen(!open)}>
        ☰
      </div>


<style>{`

/* NAVBAR CONTAINER */
.nav{
  height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  background:#020617;
  position:sticky;
  top:0;
  z-index:1000;
}

/* LOGO */
.logo{
  color:#ec4899;
  font-size:1.2rem;
  font-weight:bold;
}


/* MOBILE FIRST MENU */
.links{
  position:absolute;
  top:60px;
  right:0;
  background:#020617;
  flex-direction:column;
  width:200px;
  padding:20px;
  display:none;
  box-shadow:0 10px 30px rgba(0,0,0,0.5);
}

/* SHOW MENU WHEN OPEN */
.links.show{
  display:flex;
}


/* LINKS STYLE */
.links a{
  color:#e5e7eb;
  text-decoration:none;
  padding:8px 0;
  font-size:0.95rem;
}

.links a.active{
  color:#ec4899;
}


/* BOOK BUTTON */
.book{
  background:#ec4899;
  padding:6px 14px;
  border-radius:8px;
  color:white !important;
  font-weight:600;
  text-align:center;
}


/* HAMBURGER ICON */
.menu{
  font-size:26px;
  color:white;
  cursor:pointer;
}


/* DESKTOP VERSION */
@media (min-width:768px){

  .menu{
    display:none;
  }

  .links{
    position:static;
    flex-direction:row;
    display:flex !important;
    width:auto;
    padding:0;
    gap:20px;
    background:none;
    box-shadow:none;
  }
}

`}</style>

    </nav>
  );
}