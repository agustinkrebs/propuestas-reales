const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('posts.list', '/', async (ctx) => {
  const posts = await ctx.orm.post.findAll();
  const ministries = await ctx.orm.ministry.findAll();
  await ctx.render('posts/index', {
    posts,
    ministries,
    newPostPath: ctx.router.url('posts.new')
 });
});

router.get('posts.new', '/new', async (ctx) => {
  const ministries = await ctx.orm.ministry.findAll();
  await ctx.render('posts/new', {
    submitPostPath: ctx.router.url('posts.create'),
    ministries,
    PostIndexPath: ctx.router.url('posts.list'),
  });
});

async function associate(post, min, ctx) {
  const ministry = await ctx.orm.ministry.findByPk(min);
  await ministry.addPost(post);
  await post.addMinistry(ministry);
}

router.post('posts.create', '/', async (ctx) => {
  const post = ctx.orm.post.build(ctx.request.body);
  const privacy = ctx.request.body.privacy === 'anonymous';
  post.privacy = privacy;

  try {
    await post.save({ fields: ['privacy', 'email', 'instagram', 'type', 'body'] });
  } catch (validationError) {
    await ctx.render('posts/new', {
      post,
      errors: validationError.errors,
      submitPostPath: ctx.router.url('posts.create'),
    });
  }

  if (ctx.request.body.min1) { associate(post, ctx.request.body.min1, ctx); }
  if (ctx.request.body.min2) { associate(post, ctx.request.body.min2, ctx); }
  if (ctx.request.body.min3) { associate(post, ctx.request.body.min3, ctx); }
  if (ctx.request.body.min4) { associate(post, ctx.request.body.min4, ctx); }
  if (ctx.request.body.min5) { associate(post, ctx.request.body.min5, ctx); }
  if (ctx.request.body.min6) { associate(post, ctx.request.body.min6, ctx); }
  if (ctx.request.body.min7) { associate(post, ctx.request.body.min7, ctx); }
  if (ctx.request.body.min8) { associate(post, ctx.request.body.min8, ctx); }
  if (ctx.request.body.min9) { associate(post, ctx.request.body.min9, ctx); }
  if (ctx.request.body.min10) { associate(post, ctx.request.body.min10, ctx); }
  if (ctx.request.body.min11) { associate(post, ctx.request.body.min11, ctx); }
  if (ctx.request.body.min12) { associate(post, ctx.request.body.min12, ctx); }
  if (ctx.request.body.min13) { associate(post, ctx.request.body.min13, ctx); }
  if (ctx.request.body.min14) { associate(post, ctx.request.body.min14, ctx); }
  if (ctx.request.body.min15) { associate(post, ctx.request.body.mi15, ctx); }
  if (ctx.request.body.min16) { associate(post, ctx.request.body.min16, ctx); }
  if (ctx.request.body.min17) { associate(post, ctx.request.body.min17, ctx); }
  if (ctx.request.body.min18) { associate(post, ctx.request.body.min18, ctx); }
  if (ctx.request.body.min19) { associate(post, ctx.request.body.min19, ctx); }
  if (ctx.request.body.min20) { associate(post, ctx.request.body.min20, ctx); }
  if (ctx.request.body.min21) { associate(post, ctx.request.body.min21, ctx); }
  if (ctx.request.body.min22) { associate(post, ctx.request.body.min22, ctx); }
  if (ctx.request.body.min23) { associate(post, ctx.request.body.min23, ctx); }
  if (ctx.request.body.min24) { associate(post, ctx.request.body.min24, ctx); }


  ctx.redirect(ctx.router.url('posts.list'));
});

module.exports = router;
