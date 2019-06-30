docker login -u $1 -p $2

cd back-end && docker build -t unqpdes3pines/backend . && docker push unqpdes3pines/backend && cd ..
cd front-end && docker build -t unqpdes3pines/frontend . && docker push unqpdes3pines/frontend && cd ..