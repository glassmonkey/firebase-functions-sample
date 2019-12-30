import supertest from 'supertest'
import functions from "../src/main"

const request = supertest(functions.sample);

jest.mock('firebase-admin', () => ({
    initializeApp: jest.fn()
}));

describe('hello world sample', () => {
    it('successfully invokes function', async () => {
        let actual = await request.get('/');
        let {ok, status, body, text} = actual;
        expect(ok).toBe(true);
        expect(status).toBeGreaterThanOrEqual(200);
        expect(body).toBeDefined();
        expect(text).toEqual("hello world");
    });
});