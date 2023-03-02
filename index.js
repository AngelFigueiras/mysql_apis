import express from "express";
import { pool } from "./db.js";

const app = express();

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT 1+1 AS result');
    res.json(result);
});

app.get('/employees', (req, res) => res.send('obteniendo empleados'))

app.post('/employees', (req, res) => res.send('creando empleados'))

app.put('/employees', (req, res) => res.send('actualizando empleados'))

app.delete('/employees', (req, res) => res.send('eliminando empleados'))

app.listen(3000)
console.log("Server en el puerto 3000");