// app.js


/**
 
 * Required External modules

  */

const express = require('express');
const path = require('path');

/**
 
 * App Variables

 */

const app = express();
const port = process.env.PORT || "8000";

/**
 
 * App Configuration 

 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");
 app.use(express.static(path.join(__dirname, "public")));

/**
 
 * Routes Definitions

 */

 app.get("/", (req, res) => {
  res.render('index', {title: "Home"});
});

/**
 
 * Server Activitions

 */

 app.listen(port, '192.168.0.110',() => {
  console.log(`Listening to requests on http://localhost:${port}`);
});