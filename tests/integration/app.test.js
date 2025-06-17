const request = require('supertest');
const app = require('../../src/server');

describe('Application Integration Tests', () => {
  test('GET / should serve the HTML page', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
  });
  
  test('GET /api/services should return all services', async () => {
    const response = await request(app).get('/api/services');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(Array.isArray(response.body.data)).toBe(true);
  });
  
  test('GET /api/status should return application status', async () => {
    const response = await request(app).get('/api/status');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
  });
  
  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent');
    
    expect(response.status).toBe(404);
  });
});
