import path from 'path';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';

import {APP_PORT} from './constants';
import schema from './schema';

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    pretty: true,
  }),
);

app.use('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

try {
  app.listen(APP_PORT, () =>
    console.log(`GraphQL server running at ${APP_PORT}`),
  );
} catch (error) {
  console.log(`Something went wrong ${error}`);
}
