const express = require('express');
const app = express();
const port = 3000;

// Servir les fichiers statiques dans 'public'
app.use(express.static('public'));
app.use(express.json());  // Pour parser le JSON dans le corps des requêtes


// Route API simple JSON
app.get('/api/info', (req, res) => {
  res.json({
    author: "Yomna Boujelbene",
    project: "Docker + Node.js Demo",
    status: "En développement"
  });
});

// Compteur de visites
let visitCount = 0;
app.get('/visit', (req, res) => {
  visitCount++;
  res.send(`Cette page a été visitée ${visitCount} fois.`);
});


app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Nouveau message reçu:', name, email, message);
  // Ici tu peux faire un traitement (enregistrer en DB, envoyer un mail, etc.)
  res.json({ status: 'success', message: 'Merci pour votre message !' });
});



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

