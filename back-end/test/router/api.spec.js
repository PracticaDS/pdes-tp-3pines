import '../setup'
import request from 'supertest'
import { OK } from 'http-status-codes'
import app from '../../src/server'
import chai from 'chai'

const { assert } = chai;

describe('API', () => {
  it('/api devuelve ok', (done) => {
    request(app)
      .get('/api')
      .expect(OK)
      .end(done);
  })

  describe('/login', () => {
    it('Logea el usuario y lo devuelve', (done) => {
      request(app)
        .post('/api/login')
        .send({ usuario: { nombre: 'pepe' }})
        .expect(OK)
        .expect((res) => {
            assert.include(res.body, {nombre: 'pepe'});
        })
        .end(done);
    })
  });
})


