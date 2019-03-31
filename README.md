
# Exemplo Básico do uso de GraphQL + Node

## Pré-requisitos

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/)
* [Npm](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/pt-BR/)
* [Express](http://expressjs.com/) 
* [GraphQL](http://graphql.org/) 

## Rode a aplicação usando yarn

```
yarn install
yarn run dev
```

ou com npm

```
npm i
npm run dev
```

## Acesse

```
http://localhost/3010/user/
```

## Brinque

### Consultando um usuário específico 

```
{
user(id: 1) {
    id
    name
    knowledge {
      language
      frameworks
    }
  }
}
```


### Consultar todos usuários

```
{
  allUsers
}
```


### Quantos usuários tem

```
{
  allUsers
}
```
