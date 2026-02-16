export default function Contact(){
  return(
    <div style={container}>

      <h1 style={title}>Contact Us</h1>

      <div style={card}>

        {/* PHONE */}
        <div style={section}>
          <span style={icon}>📞</span>
          <div>
            <strong>Phone</strong>

            <p>
              <a href="tel:+639691138526" style={link}>
                +63 969 113 8526
              </a>
            </p>

            <p>
              <a href="tel:+639391548621" style={link}>
                +63 939 154 8621
              </a>
            </p>
          </div>
        </div>


        {/* EMAIL */}
        <div style={section}>
          <span style={icon}>✉️</span>
          <div>
            <strong>Email</strong>

            <p>
              <a href="mailto:shamanyerrubin@gmail.com" style={link}>
                shamanyerrubin@gmail.com
              </a>
            </p>

            <p>
              <a href="mailto:mabosod09@gmail.com" style={link}>
                mabosod09@gmail.com
              </a>
            </p>
          </div>
        </div>


        {/* INSTAGRAM */}
        <div style={section}>
          <span style={icon}>📸</span>
          <div>
            <strong>Instagram</strong>

            <a
              href="https://www.instagram.com/olympiaafrostyle?igsh=MXV6czYzdWxkZnNvOA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={button}
            >
              Visit Page
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}


/* STYLES */

const container={
  minHeight:"100vh",
  background:"linear-gradient(135deg,#020617,#0f172a)",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  padding:20
}

const title={
  position:"absolute",
  top:40,
  color:"white",
  fontSize:"clamp(2rem,5vw,3rem)"
}

const card={
  background:"rgba(17,26,68,0.7)",
  backdropFilter:"blur(10px)",
  borderRadius:25,
  padding:40,
  display:"flex",
  flexDirection:"column",
  gap:30,
  width:"100%",
  maxWidth:420,
  boxShadow:"0 0 40px rgba(236,72,153,0.3)"
}

const section={
  display:"flex",
  gap:15,
  alignItems:"flex-start",
  color:"white"
}

const icon={
  fontSize:"1.8rem"
}

const link={
  color:"#ec4899",
  textDecoration:"none",
  fontWeight:"bold",
  transition:"0.3s"
}

const button={
  display:"inline-block",
  marginTop:10,
  padding:"12px 22px",
  background:"#E1306C",
  borderRadius:12,
  color:"white",
  fontWeight:"bold",
  textDecoration:"none",
  transition:"0.3s",
  boxShadow:"0 0 15px rgba(225,48,108,0.6)"
}
