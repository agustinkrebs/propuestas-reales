const KoaRouter = require('koa-router');

const router = new KoaRouter();

async function postsWithMinistries(posts) {
  const newPosts = [];
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const ministries = await p.getMinistries();
    const minList = ministries.map((m) => m.ministry);
    const newPost = { ministries: minList };
    const copy = Object.assign(newPost, p.dataValues);
    newPosts.push(copy);
  }
  return newPosts;
}

router.get('votes.index', '/', async (ctx) => {
  const originalPosts = await ctx.orm.post.findAll({ where: { status: 'aprobado' } });
  const posts = await postsWithMinistries(originalPosts);
  const postsJSON = JSON.stringify(posts);
  await ctx.render('votes/index', {
    postsJSON,
    newPostPath: ctx.router.url('posts.new'),
  });
});

router.post('votes.create', '/', async (ctx) => {
  const vote = ctx.orm.vote.build(ctx.request.body);

  try {
    await vote.save({ fields: ['postId', 'userIp', 'affinity', 'urgency'] });
  } catch (validationError) {
    const originalPosts = await ctx.orm.post.findAll({ where: { status: 'aprobado' } });
    const posts = await postsWithMinistries(originalPosts);
    const postsJSON = JSON.stringify(posts);
    await ctx.render('votes/index', {
      postsJSON,
      newPostPath: ctx.router.url('posts.new'),
    });
  }
});
module.exports = router;