const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return "Health check ok from dev branch"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Health check ok from dev branch');
    });
});


describe('GET /test', () => {
    it('should return the sum of n1 and n2', async () => {
        const res = await request(app).get('/test');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ result: '-2' });  // Since 7 + 9 = 16
    });
});
