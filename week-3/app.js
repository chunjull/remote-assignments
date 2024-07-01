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
  console.log(`Server is listening on port ${port}`);
});

/*
Assignment 2: Build Backend API for Front-End
*/
app.get("/getData", (req, res) => {
  res.send("Lack of Parameter");
});

/*
Assignment 3: Connect to Backend API by AJAX
*/

/*
Assignment 5: HTTP Cookie
*/

/*
404 page
*/
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});