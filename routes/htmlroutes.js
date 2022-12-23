const path = require("path");
const fs = require("fs");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.delete("/notes/:id", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(notes);
});

module.exports = router;
