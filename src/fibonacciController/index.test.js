const app = require('../server');
const request = require('supertest');

test('Fibonacci series', async() => {
    const res = await request(app).post("/testFibonacci").send({"fibonacci": 1});

    expect(res.body.message).toEqual("Result is 4613732");
});
