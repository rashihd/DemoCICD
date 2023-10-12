const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return "Health check ok from dev branch"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Health check ok from dev branch');
    });
});
