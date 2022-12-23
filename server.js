const express = require("express");
const path = require("path");
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("./node_modules/uuid");
const PORT = 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

app.use("/api", apiroutes);
app.use("/", htmlroutes);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || "0.0.0.0";
server.listen(server_port, server_host, function () {
  console.log("Listening on port %d", server_port);
});
