const express = require('express');
const request = require('supertest');
const statusRoutes = require('../../src/routes/status');

// Créer une application Express minimaliste pour les tests
const app = express();
app.use(express.json());
app.use('/api/status', statusRoutes);

describe('Status Routes', () => {
  test('GET /api/status should return application status', async () => {
    const response = await request(app).get('/api/status');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('version');
    expect(response.body).toHaveProperty('environment');
  });
});
