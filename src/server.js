const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const port = 3010;

const server = express();

server.use('/user', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

server.use('/', (req, res) => {
  res.json('Acesse http://localhost:3010/user e brique, teste queries com GraphQL :)');
});


server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.info('');
  console.info("==> ✅  Servidor Funcionando!!!");
  console.info(`==> 🌎  Servidor rodando em: http://localhost:${port}/`);
  console.info('');
});
