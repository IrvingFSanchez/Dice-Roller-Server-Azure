//This is to be used for the start of the server//Simple for right now//
//Note to self, to start server, run, node server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Serves static files from the 'public' directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/dice", (req, res) => {
  res.sendFile(__dirname + "/public/dice.html");
});

app.get("/roll-dice", (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1;
  res.json({ result });
});

app.get("/", (req, res) => {
  console.log("Serving index.html");
  res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
