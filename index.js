import express from "express";
import { db } from "./db.js";
const app = express();

app.use(express.json());

app.get("/notes", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM notes");
  res.json(rows);
});

app.get("/notes/:id", async (req, res) => {
  const notesId = parseInt(req.params.id);
  const [note] = await db.query(`SELECT * FROM notes WHERE id="${notesId}"`);
  if (!note) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }
  res.json(note);
});

app.post("/notes", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "text wajib diisi" });
  }

  const [result] = await db.query("INSERT INTO notes (text) VALUES(?)", [text]);
  res.status(201).json({ id: result.insertId, text });
});

app.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const { text } = req.body;

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: "Catatan tidak ditemukan" });
  }

  if (!text) {
    return res.status(400).json({ error: "text wajib diisi" });
  }

  note.text = text;
  res.json(note);
});

app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = notes.findIndex((n) => n.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Catatan tidak ditemukan" });
  }

  const deleted = notes.splice(index, 1);
  res.json(deleted[0]);
});
0;

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
