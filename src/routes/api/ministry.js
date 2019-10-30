const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.ministry.list', '/', async (ctx) => {
  const ministryList = await ctx.orm.ministry.findAll();
  ctx.body = ctx.jsonSerializer('ministry', {
    attributes: ['ministry'],
    }).serialize(ministryList);
});

router.get('api.ministry.show', '/:id', async (ctx) => {
  const ministry = await await ctx.orm.ministry.findByPk(ctx.params.id);
  ctx.body = ctx.jsonSerializer('ministry', {
    attributes: ['ministry'],
  }).serialize(ministry);
});

module.exports = router;