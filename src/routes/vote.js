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
  await ctx.render('votes/index', {
    posts,
    newPostPath: ctx.router.url('posts.new'),
  });
});

router.post('votes.create', '/', async (ctx) => {
  const {
    postId, userIp, affinity, urgency,
  } = ctx.request.body;
  console.log(postId);
  console.log(userIp);
  console.log(affinity);
  console.log(urgency);
  const vote = ctx.orm.vote.build(ctx.request.body);
  try {
    await vote.save({ fields: ['postId', 'userIp', 'affinity', 'urgency'] });
    console.log("GUARDE EL VOTO");
  } catch (validationError) {
    const originalPosts = await ctx.orm.post.findAll({ where: { status: 'aprobado' } });
    const posts = await postsWithMinistries(originalPosts);
    const ministries = await ctx.orm.ministry.findAll();
    await ctx.render('votes/index', {
      posts,
      ministries,
      newPostPath: ctx.router.url('posts.new'),
    });
  }
});
module.exports = router;
