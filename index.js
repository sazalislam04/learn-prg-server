const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  console.log("Online Education Website Server is running");
});

app.listen(port, () => {
  console.log(`servier is running on port ${port}`);
});
