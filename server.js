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

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
