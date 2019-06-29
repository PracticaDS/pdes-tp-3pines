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

Estamos usando `cypress` para nuestros tests **e2e**

> [Documentación](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)

> Podria faltarte la libreia `libgconf2-4`, instalarla usando `sudo apt -y install libgconf2-4`


### Docker

Para levantar el container del back o del front hay que situarse en el root de esos proyectos y buildear la imagen (Dandole un nombre) y luego generar el container:

```
docker build --tag=back-o-front-version-1 .
docker run -p 3001:3001 back-o-front-version-1
```
