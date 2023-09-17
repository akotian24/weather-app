import { Request, Response } from "express";
import express from "express";
const app = express();

app.get("/", (req: Request, res: Response): void => {
  res.json({ Hello: "Hello World" });
});

app.listen(3000, (): void => {
  console.log("Server is running");
});
