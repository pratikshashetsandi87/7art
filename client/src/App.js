import React, { useState } from "react";
import axios from "axios";

function App() {
  const [plate, setPlate] = useState("");
  const [status, setStatus] = useState("");

  const detectPlate = async () => {
    setStatus("Processing...");
    const res = await axios.post("http://localhost:5000/api/detect");
    setPlate(res.data.plateNumber);
    setStatus("");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🚗 ANPR System</h1>
      <button onClick={detectPlate}>Detect Plate</button>
      <h3>{status}</h3>
      {plate && <h2>{plate}</h2>}
    </div>
  );
}

export default App;
