/**
 * Middleware de logging personnalisé
 * Enregistre des informations sur chaque requête
 */
const logger = (req, res, next) => {
  const start = Date.now();
  
  // Une fois la réponse envoyée
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  
  next();
};

module.exports = logger;
