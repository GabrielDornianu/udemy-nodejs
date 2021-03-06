const request = require('supertest');
const expect = require('expect');
const app = require('./server.js').app;

describe('Server', () => {
  describe('Root directory', () => {
  it('Should return hello world response', (done) => {
    request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error: 'PAGE NOT FOUND'
        });
      })
      .end(done);
    });
  });

  describe('Users directory', () => {
    it('Should return the name of gabi object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            gabi: {
              name: 'Gabi'
            }
          })
        })
        .end(done);
    });
  });
});
