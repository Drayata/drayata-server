import { db } from "./db.js";

const [rows] = await db.query("SELECT * FROM notes");
console.log(rows);

process.exit();
