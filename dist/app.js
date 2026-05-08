"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
// static file serve
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public/index.html"));
});
// API route
app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello from Express + TypeScript 🚀",
    });
});
app.get("/api/error", (req, res) => {
    res.status(500).json({
        error: "This is a simulated error response.",
    });
});
app.use("/api/users", user_router_1.default);
exports.default = app;
