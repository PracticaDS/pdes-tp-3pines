import request from 'supertest'
import app from '../server'

describe('API', () => {

  it('/api devuelve ok', () => {
    
    return request(app)
      .get('/')
      .expect(200, { status: 'ok' })
  })

  describe('/:usuario', () => {

    it('devuelve el usuario con el nombre del query param usuario', () => {
      const usuario = { nombre: 'pepe'};
      let nombreDeUsuario = null;
      return request(app)
        .get('/pepe')
          .then(response => {
            expect(response.body.usuario.nombre).toEqual('pepe')
          })
    })
  })
})
