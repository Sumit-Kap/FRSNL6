const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ greetMessage: "Welcome to my express server" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`express server is up and running`);
});
