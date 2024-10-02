import express from "express";

const app = express();

const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});