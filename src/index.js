import Koa from 'koa';
import Router from 'koa-router';
import rollbar from 'rollbar';

import addRoutes from './controllers';

export default () => {
  // rollbar.init('8a0f822a03c149d68e794345b540b40b');

  // rollbar.reportMessage("Hello world!");

  const app = new Koa();

  app.keys = ['some1', 'some2'];
  const config = { signed: false };

  const container = {};
  const router = new Router();
  addRoutes(router, container);


  app
    .use(router.routes())
    .use(router.allowedMethods());

  return app;
};
