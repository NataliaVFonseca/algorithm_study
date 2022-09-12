const app = require('../server');
const request = require('supertest');

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 1});

    expect(res.body.message).toEqual("Result is I");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 2});

    expect(res.body.message).toEqual("Result is II");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 3});

    expect(res.body.message).toEqual("Result is III");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 4});

    expect(res.body.message).toEqual("Result is IV");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 5});

    expect(res.body.message).toEqual("Result is V");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 6});

    expect(res.body.message).toEqual("Result is VI");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 7});

    expect(res.body.message).toEqual("Result is VII");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 8});

    expect(res.body.message).toEqual("Result is VIII");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 9});

    expect(res.body.message).toEqual("Result is IX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 10});

    expect(res.body.message).toEqual("Result is X");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 11});

    expect(res.body.message).toEqual("Result is XI");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 12});

    expect(res.body.message).toEqual("Result is XII");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 13});

    expect(res.body.message).toEqual("Result is XIII");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 14});

    expect(res.body.message).toEqual("Result is XIV");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 15});

    expect(res.body.message).toEqual("Result is XV");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 16});

    expect(res.body.message).toEqual("Result is XVI");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 17});

    expect(res.body.message).toEqual("Result is XVII");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 18});

    expect(res.body.message).toEqual("Result is XVIII");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 19});

    expect(res.body.message).toEqual("Result is XIX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 20});

    expect(res.body.message).toEqual("Result is XX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 30});

    expect(res.body.message).toEqual("Result is XXX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 40});

    expect(res.body.message).toEqual("Result is XL");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 50});

    expect(res.body.message).toEqual("Result is L");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 60});

    expect(res.body.message).toEqual("Result is LX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 70});

    expect(res.body.message).toEqual("Result is LXX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 80});

    expect(res.body.message).toEqual("Result is LXXX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 90});

    expect(res.body.message).toEqual("Result is XC");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 100});

    expect(res.body.message).toEqual("Result is C");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 110});

    expect(res.body.message).toEqual("Result is CX");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 1000});

    expect(res.body.message).toEqual("Result is M");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 200});

    expect(res.body.message).toEqual("Result is CC");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 300});

    expect(res.body.message).toEqual("Result is CCC");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 1000});

    expect(res.body.message).toEqual("Result is M");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 2000});

    expect(res.body.message).toEqual("Result is MM");
});

test('Number romans', async() => {
    const res = await request(app).post("/romans").send({"a": 3000});

    expect(res.body.message).toEqual("Result is MMM");
});

