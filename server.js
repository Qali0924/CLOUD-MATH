const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('.')); // Serwuje pliki HTML

// Endpoint do pobierania zadań
app.get('/api/tasks', (req, res) => {
    fs.readFile('database.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send("Błąd bazy danych");
        res.json(JSON.parse(data).tasks);
    });
});

app.listen(PORT, () => console.log(`Serwer CLOUD AI działa na http://localhost:${PORT}`));