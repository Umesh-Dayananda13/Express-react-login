const express = require("express");
const cors = require("cors");

require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/login", (req, res) => {
  const { name, password } = req.body;
  if (name === process.env.USERNAME && password === process.env.PASSWORD) {
    res.send({ message: `Login successful  ${process.env.USERNAME}` });
    console.log("HELLO UMESH");
  } else {
    res.send({ message: "Login failed" });
    console.log("Login failed");
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
