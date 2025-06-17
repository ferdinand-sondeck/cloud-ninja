const express = require('express');
const router = express.Router();
const Joi = require('joi');

// Liste des services (simulée pour l'instant)
const services = [
  { 
    id: 1, 
    name: 'Développement Web', 
    description: `Création de sites web 
et applications web sur mesure`, 
    price: 'Sur devis' 
  },
  { 
    id: 2, 
    name: 'Hébergement Cloud', 
    description: `Solutions 
d'hébergement sécurisées et évolutives`, 
    price: 'À partir de 9.99€/mois' 
  },
  { 
    id: 3, 
    name: 'Sécurité Informatique', 
    description: `Audit et mise en 
place de solutions de sécurité`, 
    price: 'Sur devis' 
  },
  { 
    id: 4, 
    name: 'DevOps as a Service', 
    description: `Automatisation de 
vos processus de développement et déploiement`, 
    price: 'À partir de 499€/mois' 
  },
  { 
    id: 5, 
    name: 'Formation Ninja', 
    description: `Formations aux 
technologies DevOps et Cloud`, 
    price: 'À partir de 1200€/session' 
  }
];

// Schéma de validation pour les requêtes de recherche
const querySchema = Joi.object({
  name: Joi.string().min(2).max(100),
  minPrice: Joi.number().min(0),
  maxPrice: Joi.number().min(0)
});

// GET /api/services - Récupérer tous les services
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    data: services
  });
});

// GET /api/services/:id - Récupérer un service par son ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return res.status(404).json({
      status: 'error',
      message: 'Service non trouvé'
    });
  }
  
  res.json({
    status: 'success',
    data: service
  });
});

module.exports = router;
