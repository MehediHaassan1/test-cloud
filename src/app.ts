import express, { Request, Response } from "express";
import path from "path";

const app = express();

// middleware
app.use(express.json());

// static file serve
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

// API route
app.get("/api/hello", (req: Request, res: Response) => {
	res.json({
		message: "Hello from Express + TypeScript 🚀",
	});
});

app.get("/api/error", (req: Request, res: Response) => {
	res.status(500).json({
		error: "This is a simulated error response.",
	});
});

export default app;
