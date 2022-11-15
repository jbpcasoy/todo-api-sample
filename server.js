const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./model/Todo");
mongoose.connect("mongodb://localhost:27017/todo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/another", (req, res) => {
  return res.send("Another Hello World");
});

app.post("/todo", async function (req, res) {
  try {
    await Todo.validate(req.body);
  } catch (err) {
    return res.status(400).json(err);
  }

  const todo = await Todo.create(req.body);

  return res.status(201).json(todo);
});

app.listen(3000);
