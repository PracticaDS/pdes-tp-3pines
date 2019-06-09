import request from 'supertest'
const { OK, CREATED, NOT_FOUND } = require('http-status-codes');
import app from '../server'
import chai from 'chai'
import mongoose from 'mongoose'

const { assert } = chai;

describe('API', () => {

    beforeEach(done => mongoose.connection.createCollection('usuarios', done));
    afterEach(done => {
        mongoose.connection.dropCollection('usuarios', done)
    });

    it('/api devuelve ok', (done) => {
        request(app)
            .get('/')
            .expect(OK)
            .end(done);
    })

    describe('/:usuario', () => {
        it('Creates and return a new user', (done) => {
            request(app)
                .get('/pepe')
                .expect(OK)
                .expect((res) => {
                    assert.include(res.body.usuario, {nombre: 'pepe'});
                })
                .end(done);
        })

    });
})

   /* it('devuelve el usuario con el nombre del query param usuario', () => {
      const usuario = { nombre: 'pepe'};
      let nombreDeUsuario = null;
      request(app)
        .get('/pepe')
          .then(response => {
            expect(response.status).toBe(200)
            expect(response.body.usuario.nombre).toEqual('pepe')
          })
    })
  })*/

