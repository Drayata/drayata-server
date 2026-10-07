import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "notes_user",
  password: "notes", // ganti dengan password yang kamu buat tadi
  database: "notes_db",
});
