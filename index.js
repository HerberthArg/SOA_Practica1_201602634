const express = require('express');
const app = express();
const port = 3000;

app.get('/login', (req, res) => {
    res.status(200).json({mensaje: "Inicio de sesion correcto"})
});

app.listen(port, () => {
    console.log(`Server en puerto ${port}`);
});