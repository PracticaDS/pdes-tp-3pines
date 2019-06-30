docker login -u $1 -p $2

docker build -t unqpdes3pines/frontend -f front-end/Dockerfile .
docker build -t unqpdes3pines/backend -f back-end/Dockerfile .
docker push unqpdes3pines/frontend
docker push unqpdes3pines/backend