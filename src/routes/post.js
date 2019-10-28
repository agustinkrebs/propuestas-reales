const KoaRouter = require('koa-router');

const router = new KoaRouter();

async function postsWithMinistries(posts) {
  const newPosts = [];
  for(let i=0; i < posts.length; i++) {
    let p = posts[i];
    const ministries = await p.getMinistries();
    let minList = ministries.map((m) => m.ministry);
    let newPost = {ministries: minList};
    let copy = Object.assign(newPost, p.dataValues);
    newPosts.push(copy);
  }
  return newPosts;
}

async function loadPost(ctx, next) {
  ctx.state.post = await ctx.orm.post.findById(ctx.params.id);
  return next();
}

router.get('posts.list', '/', async (ctx) => {
  const originalPosts = await ctx.orm.post.findAll({ where: { status: 'aprobado' },});
  const posts = await postsWithMinistries(originalPosts);
  const ministries = await ctx.orm.ministry.findAll();
  await ctx.render('posts/index', {
    posts,
    ministries,
    newPostPath: ctx.router.url('posts.new'),
  });
});

router.get('posts.approval', '/approval', async (ctx) => {
  const posts = await ctx.orm.post.findAll();
  await ctx.render('posts/approval', {
    posts
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
  const ministries = await ctx.orm.ministry.findAll();
  const post = ctx.orm.post.build(ctx.request.body);
  const privacy = ctx.request.body.privacy === 'anonymous';
  post.privacy = privacy;
  post.rating = 0;
  post.approved = false;

  try {
    await post.save({ fields: ['privacy', 'email', 'instagram', 'type', 'body', 'rating', 'approved'] });
  } catch (validationError) {
    await ctx.render('posts/new', {
      post,
      ministries,
      errors: validationError.errors,
      submitPostPath: ctx.router.url('posts.create'),
      PostIndexPath: ctx.router.url('posts.list'),

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
