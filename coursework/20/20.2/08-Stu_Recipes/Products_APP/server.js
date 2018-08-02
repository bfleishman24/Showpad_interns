const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const mongojs = require("mongojs");



const databaseUrl = "products_db";
const collections = ["products"];

// Use mongojs to hook the database to the db variable
const db = mongojs(databaseUrl, collections);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/productZone"
mongoose.connect(MONGODB_URI);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
