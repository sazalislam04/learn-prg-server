const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./data/courses.json");

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

app.listen(port, () => {
  console.log(`servier is running on port ${port}`);
});
