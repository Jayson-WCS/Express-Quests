require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const userHandler = require("./usersHandlers");

app.get("/api/users", userHandler.getUsers);
app.get("/api/users/:id", userHandler.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
