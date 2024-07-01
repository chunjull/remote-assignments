const express = require("express");
const app = express();
const port = 3000;

/* 
Assignment 1: Your First Web Server
*/
app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
