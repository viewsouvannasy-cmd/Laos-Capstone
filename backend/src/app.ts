import express from "express";

const app = express();

app.get("/healthz", (req, res) => {
  res.status(200).send("Ready");
});

export default app;
