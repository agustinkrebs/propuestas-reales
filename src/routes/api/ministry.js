const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.ministry.list', '/', async (ctx) => {
  const associationList = await ctx.orm.post_ministries.findAll();
  
  ctx.body = ctx.jsonSerializer('post_ministries', {
    attributes: ['ministryId', 'postId'],
    }).serialize(associationList);
});

router.get('api.ministry.show', '/:id', async (ctx) => {
  const associationList = await ctx.orm.post_ministries.findAll({ where: { postId: ctx.params.id },});
  ctx.body = ctx.jsonSerializer('post_ministries', {
    attributes: ['ministryId', 'postId'],
  }).serialize(associationList);
});

module.exports = router;