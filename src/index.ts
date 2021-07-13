import express from "express";
import { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "OK" });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
