const request = require('supertest');
const app = require('./../../src/app');

// Database Fixtures
const { userOneToken, configureDatabase } = require('./../fixtures/db');

// Testing
const auth = require('./../../src/middleware/auth');

let server, agent;

// Hooks - Before All
beforeAll(async (done) => {
    await configureDatabase();

    server = app.listen(4000, err => {
        if (err) return done(err);

        agent = request.agent(server);
        app.use(auth).get('/', (req, res) => res.send());

        done();
    });
});

// Hooks - After All
afterAll(done => {
    return server && server.close(done); 
});

describe('Express Auth Middleware', () => {
    test('Should return 401 with an invalid token', async () => {
        await agent
            .get('/')
            .set('Authorization', 'Bearer 123')
            .send()
            .expect(401);
    });

    test('Should return 401 without an Authorization Header', async () => {
        await agent
            .get('/')
            .send()
            .expect(401);  
    });
    
    test('Should return 200 with a valid token', async () => {
        await agent
            .get('/')
            .set('Authorization', `Bearer ${userOneToken}`)
            .send()
            .expect(200);
    });
});


  // beforeAll(async (done) => {
  //   await mongoose.connect('mongodb://localhost:27017/testdb');
  //   server = app.listen(4000, () => {
  //     global.agent = request.agent(server);
  //     done();
  //   });
  // });
