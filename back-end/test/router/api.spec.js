import '../setup'
import request from 'supertest'
import { OK } from 'http-status-codes'
import app from '../../src/server'
import chai from 'chai'
import FabricaApp from '../../src/model/fabrica-app';

const { assert } = chai;

describe('API', () => {
  let nombreUsuario
  let fabricaInicial
  let usuario

  beforeEach(() => {
    nombreUsuario = 'pepe'
    usuario = { nombre: nombreUsuario }
    fabricaInicial = {
      ancho: 10,
      alto: 10,
      celdas: [],  // TODO: generar lista de celdas.
      ganancia: 0,
      nombreUsuario
    }
  })

  it('/api devuelve ok', (done) => {
    request(app)
      .get('/api')
      .expect(OK)
      .end(done);
  })

  describe('/login', () => {

    describe('para un usuario nuevo', () => {

      it('logea el usuario y devuelve una fabrica nueva', (done) => {
        request(app)
          .post('/api/login')
          .send(usuario)
          .expect(OK)
          .expect((res) => {
             assert.equal(res.body.fabrica.nombreUsuario, nombreUsuario)
             assert.equal(res.body.fabrica.ganancia, 0)
          })
          .end(done);
      })
    });
  
    describe('para un usuario existente', () => {

      it('devuelve la fabrica del usuario', async (done) => {
        const fabrica = {...fabricaInicial, ganancia: 10 }

        await request(app)
          .post('/api/login')
          .send(usuario)

        await request(app)
          .post('/api/fabrica')
          .send({ usuario: nombreUsuario , fabrica})

        request(app)
          .post('/api/login')
          .send(usuario)
          .expect(OK)
          .expect((res) => {
             assert.equal(res.body.fabrica.nombreUsuario, nombreUsuario)
             assert.equal(res.body.fabrica.ganancia, fabrica.ganancia)
          })
          .end(done);
      })

      it('no lo vuelve a guardar', async (done) => {
        let id

        await request(app)
          .post('/api/login')
          .send(usuario)
          .expect(OK)
          .expect((res) => {
            assert.equal(res.body.fabrica.nombreUsuario, nombreUsuario)
            id = res.body.fabrica._id
          })

        request(app)
          .post('/api/login')
          .send(usuario)
          .expect(OK)
          .expect((res) => {
            assert.equal(res.body.fabrica.nombreUsuario, nombreUsuario)
            assert.equal(res.body.fabrica._id, id)
          })
          .end(done);
      })
    });
  });

  describe('/fabrica', () => {

    it('guarda la fabrica', async (done) => {
      let idDeFabrica
      await request(app)
        .post('/api/login')
        .send(usuario)
        .expect(OK)
        .expect((res) => {
          assert.equal(res.body.fabrica.nombreUsuario, nombreUsuario)
          idDeFabrica = res.body.fabrica._id
        })

      const fabrica = {...fabricaInicial, ganancia: 10 }

      request(app)
        .post('/api/fabrica')
        .send({ usuario , fabrica})
        .expect(OK)
        .expect((res) => {
          assert.equal(res.body.fabrica.nombreUsuario, nombreUsuario)
          assert.equal(res.body.fabrica.ganancia, fabrica.ganancia)
          assert.equal(res.body.fabrica._id, idDeFabrica)
        })
        .end(done);
    })
  })
})


