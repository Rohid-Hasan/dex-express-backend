const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(express.static(path.join(__dirname, "assets")));

//bodyParser configure
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS Middleware
app.use((req, res, next) => {
  //console.log("I am allowing the user");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, PUT, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  //console.log("Next");
  next();
});

app.use(contactRoutes);

//last middleware for error handling
app.use((err, req, res, next) => {
  console.error(err);
  const errorStatus = err.status | 500;
  res.status(errorStatus).json(err.message);
});

app.listen(3000);
