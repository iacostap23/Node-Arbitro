import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Servidor base funcionando " });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
