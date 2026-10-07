const notes = [
  { id: 1, text: "Belajar Express" },
  { id: 2, text: "Bikin API pertama" },
  { id: 3, text: "Bikin API KEUDA" },
];

const id = 1;
const index = notes.findIndex((n) => n.id === id);

index;
