const express = require('express');
const request = require('supertest');
const servicesRoutes = require('../../src/routes/services');

// Créer une application Express minimaliste pour les tests
const app = express();
app.use(express.json());
app.use('/api/services', servicesRoutes);

describe('Services Routes', () => {
  test('GET /api/services should return all services', async () => {
    const response = await request(app).get('/api/services');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });
  
  test('GET /api/services/:id should return a specific service', async () => {
    const response = await request(app).get('/api/services/1');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data).toHaveProperty('id', 1);
    expect(response.body.data).toHaveProperty('name');
    expect(response.body.data).toHaveProperty('description');
    expect(response.body.data).toHaveProperty('price');
  });
  
  test('GET /api/services/:id with invalid ID should return 404', async () => {
    const response = await request(app).get('/api/services/999');
    
    expect(response.status).toBe(404);
    expect(response.body.status).toBe('error');
    expect(response.body.message).toBe('Service non trouvé');
  });
});
