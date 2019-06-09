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
            .get('/api')
            .expect(OK)
            .end(done);
    })

    describe('/api/:usuario', () => {
        it('Creates and return a new user', (done) => {
            request(app)
                .get('/api/pepe')
                .expect(OK)
                .expect((res) => {
                    assert.include(res.body.usuario, {nombre: 'pepe'});
                })
                .end(done);
        })

    });
})


