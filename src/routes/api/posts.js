const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.posts.list', '/', async (ctx) => {
  const postsList = await ctx.orm.post.findAll();
  ctx.body = ctx.jsonSerializer('post', {
    attributes: ['privacy', 'email', 'instagram', 'body', 'rating', 'type', 'status'],
    }).serialize(postsList);
});

router.get('api.post.show', '/:id', async (ctx) => {
  const post = await ctx.orm.post.findByPk(ctx.params.id);
  ctx.body = ctx.jsonSerializer('post', {
    attributes: ['privacy', 'email', 'instagram', 'body', 'rating', 'type', 'status'],
    }).serialize(post);
});

module.exports = router;