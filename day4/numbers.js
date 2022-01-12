const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3000;

const data = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.send(data);
});

app.post("/numbers", (req, res) => {
  const num = +req.body.num;
  if (data.includes(num)) {
    res.send("num already included");
    return;
  }
  data.push(num);
  res.send(data);
});

app.put("/numbers", (req, res) => {
  const numToDelete = +req.query.num;
  const newNum = +req.body.num;
  console.log(newNum);
  data.splice(data.indexOf(numToDelete), 1, newNum);
  res.send(data);
});

app.delete("/numbers", (req, res) => {
    const id = parseInt(req.body.num);
    const index = data.indexOf(id);
    if (index === -1)
      return res.status(400).send(`The ${id} number is not found`);
    data.splice(index, 1);
    res.send(data);
  });

app.listen(3000, () => {
  console.log(`Server is on port ${PORT}.`);
});
