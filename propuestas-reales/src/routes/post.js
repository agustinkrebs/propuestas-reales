const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('posts.list', '/', async (ctx) => {
  const posts = await ctx.orm.post.findAll();
  await ctx.render('posts/index', {
    posts,
    newPostPath: ctx.router.url('posts.new')});
});

router.get('posts.new', '/new', async (ctx) => {
  await ctx.render('posts/new', {
    submitPostPath: ctx.router.url('items.create'),
  });
});

router.post('posts.create', '/', async (ctx) => {
  ctx.redirect(ctx.router.url('posts.list'));
});

module.exports = router;