export default function Home() {
  return (
    <div style={{
      background:"#0f172a",
      color:"white",
      minHeight:"100vh",
      fontFamily:"sans-serif",
      textAlign:"center",
      paddingTop:"100px"
    }}>
      <h1>Olympia AfroStyle</h1>
      <p>Hair services for friends, family & community</p>

      <button style={{
        marginTop:20,
        padding:"12px 25px",
        background:"#ec4899",
        border:"none",
        borderRadius:8,
        color:"white",
        fontWeight:"bold",
        cursor:"pointer"
      }}>
        Book Appointment
      </button>
    </div>
  );
}
