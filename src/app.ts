import express, { Request, Response } from "express";
import path from "path";

const app = express();

// middleware
app.use(express.json());

// static file serve
app.use(express.static(path.join(__dirname, "../public")));

// API route
app.get("/api/hello", (req: Request, res: Response) => {
	res.json({
		message: "Hello from Express + TypeScript 🚀",
	});
});

export default app;
