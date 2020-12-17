const express = require("express");
const app = express();
const port = 3000;

app.get("/login", (req, res) => {
  if (1 == 1) res.status(200).json({ mensaje: "Pruebas correctass" });
  else res.status(500).json({ mensaje: "Pruebas incorrectas" });
});

app.listen(port, () => {
  console.log(`Server en puerto ${port}`);
});
