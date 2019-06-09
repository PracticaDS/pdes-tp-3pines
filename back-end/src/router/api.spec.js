import request from 'supertest'
const { OK } = require('http-status-codes');
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

    describe('/login', () => {
        it('Logea el usuario y lo devuelve', (done) => {
            request(app)
                .post('/api/login')
                .send({ nombre: 'pepe' })
                .expect(OK)
                .expect((res) => {
                    assert.include(res.body, {nombre: 'pepe'});
                })
                .end(done);
        })

    });
})


