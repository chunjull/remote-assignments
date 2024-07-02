const express = require("express");
const app = express();
const port = 3000;
/*
Assignment 3: Connect to Backend API by AJAX
*/
app.use(express.static("public"));

/* 
Assignment 1: Your First Web Server
*/
app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
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
Keyword: req.cookie
參考：treehouse Express basic: Statelessness, Setting and Reading Cookies
*/

/*
404 page
*/
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});