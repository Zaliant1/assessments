const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  postFortune,
  getAllFortunes,
  delFortune,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/allfortunes", getAllFortunes);
app.post("/api/postfortune", postFortune);
app.delete("/api/delfortune", delFortune);

app.listen(4000, () => console.log("Server running on 4000"));
