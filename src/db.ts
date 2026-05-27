import { Pool } from "pg";

export const pool = new Pool({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "123456",
	database: "test-app",
	ssl: {
		rejectUnauthorized: false,
	},
});
