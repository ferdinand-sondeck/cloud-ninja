const express = require('express');
const router = express.Router();

// GET /api/status - Récupérer l'état de l'application
router.get('/', (req, res) => {
  // Informations sur l'état de l'application
  const status = {
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  };
  
  res.json(status);
});

module.exports = router;
