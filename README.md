# Portfolio

> This is my portfolio

## Get started

### Prerequisites

- Docker 17.x

### Build Docker Image

```
docker build -t portfolio .
```

### Run Docker Container

```
docker run -v $(pwd):/app -p 3000:3000 --name portfolio -i -t portfolio bash
cd /app
npm install # if necessary
npm start
```

## Build Project

### Build for Development (./tmp)

```
# inside docker container
npm run build
```

### Build for Production (./docs)

```
# inside docker container
npm run build-production
```
