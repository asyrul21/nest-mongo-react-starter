# NestJS - MongoDB - React/Redux Starter Code

Steps:

1. Git clone

2. populate your .env

3. npm run start:app // todo

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Server Authentication

1. See [Sign Up](#1-sign-up) or [Login](#2-login) on how to obtain a `token`

2. In your request `Header`, attach a key of `Authorization` and value of `Bearer [your token]`

## Server Endpoints:

### 1. Sign Up:

```bash
POST localhost:5000/api/auth/signup
```

Body (raw/json) :

```json
{
  "email": "john@mail.com",
  "name": "Johny",
  "password": "1234"
}
```

Response:

```json
{
  "_id": "6560514a6b7613df1a6c748f",
  "name": "Johny",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AbWFpbC5jb20iLCJpYXQiOjE3MDA4MTEwODMsImV4cCI6MTcwNTk5NTA4M30.LYuNZc_8gmUQ7XJUwcNHc7eebrXvAioL7_96WQUMBOA",
  "email": "john@mail.com",
  "isAdmin": false
}
```

### 2. Login

```
POST localhost:5000/api/auth/signin
```

Body (raw/json) :

```json
{
  "email": "john@mail.com",
  "password": "1234"
}
```

Response:

```json
{
  "_id": "6560514a6b7613df1a6c748f",
  "name": "Johny",
  "email": "john@mail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AbWFpbC5jb20iLCJpYXQiOjE3MDA4MTEyODAsImV4cCI6MTcwNTk5NTI4MH0.-E4shO2GbwDhBE40iznM0U10waobUxU2kf2gysyQcvI",
  "isAdmin": false
}
```
