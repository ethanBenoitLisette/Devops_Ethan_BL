const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API!');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
