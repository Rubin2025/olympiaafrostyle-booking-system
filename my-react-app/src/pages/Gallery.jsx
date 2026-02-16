import g1 from "../assets/gallery/braids1.png";
import g2 from "../assets/gallery/braids2.png";
import g3 from "../assets/gallery/cornrows1.png";
import g4 from "../assets/gallery/style1.png";
import g5 from "../assets/gallery/style2.png";
import g6 from "../assets/gallery/style3.png";

export default function Gallery(){

  const images = [g1,g2,g3,g4,g5,g6];

  return(
    <div style={container}>

      <h1 style={title}>Our Work Gallery</h1>

      <div style={grid}>
        {images.map((img,i)=>(
          <div key={i} style={card}>
            <img
  src={img}
  style={image}
  onMouseEnter={e=>e.target.style.transform="scale(1.05)"}
  onMouseLeave={e=>e.target.style.transform="scale(1)"}
/>
          </div>
        ))}
      </div>

    </div>
  )
}


/* STYLES */

const container={
  minHeight:"100vh",
  background:"#020617",
  padding:"40px 20px",
  textAlign:"center",
  color:"white"
}

const title={
  fontSize:"clamp(1.8rem,5vw,3rem)",
  marginBottom:30
}

const grid={
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
  gap:20,
  maxWidth:1200,
  margin:"auto"
}

const card={
  overflow:"hidden",
  borderRadius:15,
  background:"#111a44"
}

const image={
  width:"100%",
  height:"100%",
  objectFit:"cover",
  aspectRatio:"1/1",
  transition:"0.3s",
  cursor:"pointer"
}
