import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open,setOpen] = useState(false);

  return (
    <nav className="nav">

      <h2 className="logo">Olympia</h2>

      <div className={`links ${open ? "show" : ""}`}>
        <NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink>
        <NavLink to="/gallery" onClick={()=>setOpen(false)}>Gallery</NavLink>
        <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
        <NavLink to="/book" className="book" onClick={()=>setOpen(false)}>Book</NavLink>
      </div>

      <div className="menu" onClick={()=>setOpen(!open)}>
        ☰
      </div>


<style>{`

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

.logo{
  color:#ec4899;
  font-size:1.2rem;
}

.links{
  display:flex;
  gap:20px;
}

.links a{
  color:#e5e7eb;
  text-decoration:none;
}

.links a.active{
  color:#ec4899;
}

.book{
  background:#ec4899;
  padding:6px 14px;
  border-radius:8px;
  color:white !important;
}

.menu{
  display:none;
  font-size:26px;
  color:white;
  cursor:pointer;
}


/* MOBILE */
@media (max-width:768px){

  .menu{
    display:block;
  }

  .links{
    position:absolute;
    top:60px;
    right:0;
    background:#020617;
    flex-direction:column;
    width:200px;
    padding:20px;
    display:none;
  }

  .links.show{
    display:flex;
  }
}

`}</style>

    </nav>
  );
}