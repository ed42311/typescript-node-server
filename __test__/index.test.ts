import app from '../src/index';
import * as supertest from 'supertest';

describe('app', () => {
  let server;
  let request;

  beforeAll(async done => {
    server = app.listen(4000, () => {
      request = supertest(server);
      done();
    });
  });


  it('should return a successful response for GET /', async (done) => {
    const response = await request.get('/')
    expect(response.statusCode).toBe(200)
    done()
  });

  afterAll(async () => {
    await server.close()
  });

});
