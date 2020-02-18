const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080; // CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.static(__dirname + "/dist/frontend"));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});
app.listen(port);
console.log("Port: " + port);
