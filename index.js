import express from "express";
const app = express();

app.use(express.json());

const notes = [
  { id: 1, text: "Belajar Express" },
  { id: 2, text: "Bikin API pertama" },
];

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const notesId = parseInt(req.params.id);
  const note = notes.find((n) => n.id === notesId);
  if (!note) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }
  res.json(note);
});

app.post("/notes", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "text wajib diisi" });
  }

  const newNote = {
    id: notes.length + 1,
    text,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
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
