const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const productsCollection = require("./data/produce.json");

app.get("/", (req, res) => {
  res.send("./data/produce.json");
});

app.get("/all-products", (req, res) => {
  res.send(productsCollection);
});

app.get("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const getSingleItem = productsCollection.find((p) => p.id === id);
  if (!getSingleItem) {
    res.send("No data");
  }
  res.send(getSingleItem);
});

app.get("/category/:name", (req, res) => {
  const name = req.params.name;

  const getCategory = productsCollection?.filter((p) => p.category === name);
  res.send(getCategory);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;
