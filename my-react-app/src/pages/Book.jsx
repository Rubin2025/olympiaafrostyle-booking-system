import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function Book(){

  const [form,setForm] = useState({
    name:"",
    phone:"",
    service:"",
    date:"",
    time:""
  });

  const [submitted,setSubmitted] = useState(false);
  const [takenTimes,setTakenTimes] = useState([]);

  // FETCH TAKEN TIMES FROM DATABASE
  async function fetchTakenTimes(selectedDate){
    const { data } = await supabase
      .from("bookings")
      .select("time")
      .eq("date", selectedDate);

    if(data){
      setTakenTimes(data.map(item => item.time));
    }
  }

  // GENERATE TIME SLOTS 8AM–8PM
  function generateTimes(){
    const times = [];
    for(let hour=8; hour<=20; hour++){
      for(let min of ["00","30"]){
        if(hour===20 && min==="30") break;

        let h = hour>12 ? hour-12 : hour;
        let ampm = hour>=12 ? "PM" : "AM";

        times.push(`${h}:${min} ${ampm}`);
      }
    }
    return times;
  }

  const allTimes = generateTimes();

  // HANDLE INPUT CHANGE
  function handleChange(e){
    const {name,value} = e.target;
    setForm({...form,[name]:value});

    if(name==="date"){
      fetchTakenTimes(value);
    }
  }

  // SUBMIT BOOKING
  async function handleSubmit(e){
    e.preventDefault();

    const { error } = await supabase
      .from("bookings")
      .insert([form]);

    if(error){
      alert("Booking failed");
    } else {
      setSubmitted(true);
    }
  }

  return(
    <div style={container}>

      <h1>Book Appointment</h1>

      {submitted ? (
        <h2 style={{color:"#22c55e"}}>Booking Confirmed ✅</h2>
      ) : (

      <form onSubmit={handleSubmit} style={formStyle}>

        <input
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          style={input}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          style={input}
        />

        <select name="service" required onChange={handleChange} style={input}>
          <option value="">Select Style</option>
          <option>Braids</option>
          <option>Dreadlocks</option>
          <option>Cornrows</option>
          <option>Men Styles</option>
        </select>

        {/* DATE */}
        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
          style={input}
        />

        {/* TIME */}
        <select
          name="time"
          required
          onChange={handleChange}
          style={input}
        >
          <option value="">Select Time</option>

          {allTimes.map(t => (
            <option
              key={t}
              value={t}
              disabled={takenTimes.includes(t)}
            >
              {takenTimes.includes(t) ? `${t} (Booked)` : t}
            </option>
          ))}

        </select>

        <button style={button}>Confirm Booking</button>

      </form>
      )}

    </div>
  );
}


/* STYLES */

const container = {
  minHeight:"100vh",
  background:"#020617",
  color:"white",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  padding:20
};

const formStyle = {
  display:"flex",
  flexDirection:"column",
  gap:15,
  width:"100%",
  maxWidth:400
};

const input = {
  padding:12,
  borderRadius:8,
  border:"none"
};

const button = {
  padding:14,
  background:"#ec4899",
  border:"none",
  borderRadius:10,
  color:"white",
  fontWeight:"bold",
  cursor:"pointer"
};
