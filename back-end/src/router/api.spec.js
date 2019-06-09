import request from 'supertest'
import app from '../server'

describe('API', () => {

  it('/api devuelve ok', () => {
    
    return request(app)
      .get('/api/')
      .expect(200, { status: 'ok' })
  })

  describe('/api/login', () => {

    it('devuelve ok', () => {
      const usuario = { nombre: 'pepe'}

      return request(app)
        .post('/api/login')
        .send({usuario})
        .expect(200, { status: 'ok', usuario})
    })
  })
})
