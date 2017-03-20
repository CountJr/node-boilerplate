export default (router) => {
  router
    .get('/', (ctx) => {
      ctx.body = 'Hello World';
    })
    .get('/date', (ctx) => {
      ctx.body = new Date();
    });
};
