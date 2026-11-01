import { db } from "./db.js";

const [notes] = await db.query("SELECT * FROM notes");
console.log(notes);

process.exit();
