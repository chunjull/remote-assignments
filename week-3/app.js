const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
/*
Assignment 3: Connect to Backend API by AJAX
*/
app.use(express.static("public"));

/*
Assignment 5: HTTP Cookie
*/
app.use(cookieParser());

/* 
Assignment 1: Your First Web Server
*/
app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

/*
Assignment 2: Build Backend API for Front-End
Keyword: req.query
*/
app.get("/getData", (req, res) => {
  const number = req.query.number;
  if (number === undefined) {
    res.send("Lack of Parameter");
  } else if (isNaN(number) || number <= 0 ||!Number.isInteger(Number(number))){
    res.send("Wrong Parameter");
  } else {
    const num = parseInt(number, 10);
    const result = (num * (num + 1)) / 2;
    res.send(`${result}`);
  }
});

/*
Assignment 5: HTTP Cookie
*/
app.get("/myName", (req, res) => {
  const userName = req.cookies.userName;
  if (userName) {
    res.send(`Hello, ${userName}.`);
  } else {
    res.send(`
      <form action="/trackName" method="GET">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
      </form>
    `);
  }
})

app.get("/trackName", (req, res) => {
  const userName = req.query.name;
  if (userName) {
    res.cookie('userName', userName, { maxAge: 900000, httpOnly: true });
    res.redirect('/myName');
  } else {
    res.send('Name cannot be empty');
  }
})

/* port */
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
/*
404 page
*/
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});