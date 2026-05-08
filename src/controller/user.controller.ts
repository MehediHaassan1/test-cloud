import { Request, Response } from "express";
import { pool } from "../db";

// CREATE user
export const createUser = async (req: Request, res: Response) => {
	try {
		const { name, email } = req.body;

		const result = await pool.query(
			"INSERT INTO app_users.users (name, email) VALUES ($1, $2) RETURNING *",
			[name, email]
		);

		res.status(201).json(result.rows[0]);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// GET all users
export const getUsers = async (_req: Request, res: Response) => {
	try {
		const result = await pool.query("SELECT * FROM app_users.users ORDER BY id DESC");
		res.json(result.rows);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// GET single user
export const getUserById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const result = await pool.query("SELECT * FROM app_users.users WHERE id = $1", [
			id,
		]);

		if (result.rows.length === 0) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json(result.rows[0]);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// UPDATE user
export const updateUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name, email } = req.body;

		const result = await pool.query(
			"UPDATE app_users.users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
			[name, email, id]
		);

		res.json(result.rows[0]);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// DELETE user
export const deleteUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		await pool.query("DELETE FROM app_users.users WHERE id=$1", [id]);

		res.json({ message: "User deleted successfully" });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};