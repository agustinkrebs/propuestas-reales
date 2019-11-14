const KoaRouter = require('koa-router')

const router = new KoaRouter()

router.get('api.stats.top_posts', '/', async ctx => {
  const postsList = await ctx.orm.post.findAll({
    order: [['rating', 'DESC']],
    limit: 10,
    attributes: ['type', 'body', 'rating'],
  })
  ctx.body = postsList
})

module.exports = router
