[![Build Status](https://travis-ci.org/PracticaDS/pdes-tp-3pines.svg?branch=master)](https://travis-ci.org/PracticaDS/pdes-tp-3pines)

# Revolución Industrial

> Prácticas de Desarrollo de Software
> Trabajo Práctico Integrador Grupal - Universidad Nacional de Quilmes - 2019

# Armado del ambiente de desarrollo

Para armar el ambiente de desarrollo es necesario tener instalado [Yarn](https://yarnpkg.com/en/).
Clonar el repositorio y en el root ejecutar `nvm use && yarn install && cd front-end/ && yarn install cd ../back-end/ && yarn install`.

## Proceso de desarrollo

1. Asignarse un issue
2. Crear un branch que salga de master y ponerle `#issue-nombre-del-branch` (ejemplo: `2-agregar-travis`)
3. Crear el Pull Request y agregarle el tag `not ready`
4. Desarrollar manteniendo al día el branch con master realizando merges
5. Quitar el tag `not ready` y pedir aprobación del PR
6. Corregir los comentarios si es que existen


### Testing

Estamos usando `jest-enzyme` para nuestros tests de **front-end**.

> [Documentación](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md)

> [Assertions](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#assertions)

Estamos usando `supertest` para nuestros tests de **back-end**

> [Documentación](https://github.com/visionmedia/supertest)

