if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
// Load environment variables from .env file
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));

// Define the route for the home page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/artificial-intelligence/", (req, res) => {
  res.render("artificial-intelligence");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

