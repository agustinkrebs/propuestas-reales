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

async function countVotes(ctx) {
  const votes = await ctx.orm.vote.findAll();
  const countedVotes = {};
  votes.forEach((vote) => {
    countedVotes[vote.postId] = (countedVotes[vote.postId] || 0) + 1;
  });
  return countedVotes;
}

async function postsWithVotes(posts, countedVotes) {
  const newPosts = [];
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const votes = (countedVotes[p.id] || 0);
    const newPost = { votes };
    const copy = Object.assign(newPost, p);
    newPosts.push(copy);
  }
  return newPosts;
}

router.get('votes.index', '/', async (ctx) => {
  const originalPosts = await ctx.orm.post.findAll({ where: { status: 'aprobado' } });
  let posts = await postsWithMinistries(originalPosts);
  const countedVotes = await countVotes(ctx);
  posts = await postsWithVotes(posts, countedVotes);
  posts.sort((a, b) => a.votes - b.votes);
  const postsJSON = JSON.stringify(posts);

  await ctx.render('votes/index', {
    postsJSON,
    newPostPath: ctx.router.url('posts.new'),
  });
});

router.post('votes.create', '/', async (ctx) => {
  const vote = ctx.orm.vote.build(ctx.request.body);
  console.log(vote.affinity);
  if (vote.affinity === 'null') {
    vote.affinity = null;
  }
  if (vote.urgency === 'null') {
    vote.urgency = null;
  }
  try {
    await vote.save({ fields: ['postId', 'userIp', 'affinity', 'urgency'] });
  } catch (validationError) {
    console.log(validationError);
    // const originalPosts = await ctx.orm.post.findAll({ where: { status: 'aprobado' } });
    // const posts = await postsWithMinistries(originalPosts);
    // const postsJSON = JSON.stringify(posts);
    // await ctx.render('votes/index', {
    //   postsJSON,
    //   newPostPath: ctx.router.url('posts.new'),
    // });
  }
});
module.exports = router;
