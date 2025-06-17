const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const servicesRoutes = require('./routes/services');
const statusRoutes = require('./routes/status');
const loggerMiddleware = require('./middleware/logger');

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration des middlewares
app.use(cors()); // Permet les requêtes cross-origin
app.use(express.json()); // Parse les requêtes JSON
app.use(express.urlencoded({ extended: true })); // Parse les données de formulaire
app.use(morgan('dev')); // Logging des requêtes HTTP
app.use(loggerMiddleware); // Notre middleware de logging personnalisé

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Routes API
app.use('/api/services', servicesRoutes);
app.use('/api/status', statusRoutes);

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Une erreur est survenue sur le serveur'
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app; // Pour les tests
