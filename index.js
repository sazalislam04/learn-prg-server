const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./data/courses.json");
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Online Education Website Server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((cr) => cr._id === id);
  res.send(course);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category = courses.find((ct) => ct.category_id === id);
  res.send(category);
});

app.listen(port, () => {
  console.log(`servier is running on port ${port}`);
});
