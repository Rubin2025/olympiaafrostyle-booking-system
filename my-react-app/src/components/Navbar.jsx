import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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


      {/* CSS */}
      <style>{`

        .nav{
          height:60px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 22px;
          background:#020617;
          position:sticky;
          top:0;
          z-index:1000;
        }

        .logo{
          color:#ec4899;
          font-size:1.2rem;
          font-weight:bold;
        }

        .links{
          display:flex;
          gap:20px;
          align-items:center;
        }

        .links a{
          color:#e5e7eb;
          text-decoration:none;
          font-size:0.95rem;
          font-weight:500;
          transition:.25s;
        }

        .links a.active{
          color:#ec4899;
        }

        .book{
          background:#ec4899;
          padding:6px 14px;
          border-radius:8px;
          color:white !important;
          font-weight:600;
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
            box-shadow:0 10px 30px rgba(0,0,0,0.5);
          }

          .links.show{
            display:flex;
          }
        }

      `}</style>

    </nav>
  );
}