const express = require("express");

const app = express();
const PORT = 3000;

app.get("/numbers", (req, res) => {
  console.log("success using get");
  res.send("get");
});
app.put("/numbers", (req, res) => {
  console.log("success using put");
  res.send("put");
});
app.delete("/numbers", (req, res) => {
  console.log("success using delete");
  res.send("delete");
});
app.post("/numbers", (req, res) => {
  console.log("success using post");
  res.send("post");
});

app.listen(3000, () => {
  console.log(`Server is on port ${PORT}.`);
});
