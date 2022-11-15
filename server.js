const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/another", (req, res) => {
  return res.send("Another Hello World");
});

app.listen(3000);
