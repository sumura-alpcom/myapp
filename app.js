const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Get request is called");
  res.send("Hello World pipe2!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
