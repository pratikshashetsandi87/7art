const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/anpr");

const Vehicle = mongoose.model("Vehicle", {
  plateNumber: String,
  createdAt: { type: Date, default: Date.now }
});

app.post("/api/detect", async (req, res) => {
  const response = await axios.post("http://localhost:8000/process");
  const plate = response.data.plate;

  await Vehicle.create({ plateNumber: plate });

  res.json({ plateNumber: plate });
});

app.get("/api/history", async (req, res) => {
  const data = await Vehicle.find();
  res.json(data);
});

app.listen(5000, () => console.log("Server running"));
