/**
 * Middlewares de sécurité pour l'application
 */

// En-têtes de sécurité HTTP
const securityHeaders = (req, res, next) => {
  // Empêche le navigateur de MIME-sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Contrôle comment le navigateur gère le contenu intégré
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  
  // Active la protection XSS dans les navigateurs modernes
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Contrôle quelles fonctionnalités/APIs le navigateur peut utiliser
  res.setHeader('Feature-Policy', 'geolocation \'none\'; microphone \'none\'; camera \'none\'');
  
  next();
};

// Rate limiting simple (à améliorer en production avec Redis)
const requestLimiter = (req, res, next) => {
  // En production, utilisez un middleware comme express-rate-limit
  next();
};

module.exports = {
  securityHeaders,
  requestLimiter
};
