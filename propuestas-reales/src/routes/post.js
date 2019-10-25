const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('posts', '/', async (ctx) => {
  const posts = await ctx.orm.post.findAll();
  await ctx.render('posts/index', { posts });
});

module.exports = router;