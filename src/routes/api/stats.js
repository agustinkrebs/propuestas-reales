const KoaRouter = require('koa-router')

const router = new KoaRouter()

router.get('api.stats.top_posts', '/', async ctx => {
  const postsList = await ctx.orm.post.findAll({
    order: [['rating', 'DESC']],
    limit: 10,
    attributes: ['type', 'body', 'rating'],
    include: [ctx.orm.ministry],
  })
  ctx.body = postsList
})

router.get('api.stats.n_posts', '/nposts', async ctx => {
  const ministries = {}
  const types = {}
  const postsList = await ctx.orm.post.findAll({
    include: [ctx.orm.ministry],
  })
  postsList.forEach(post => {
    if (!(post.type in types)) {
      types[post.type] = 0
    } else {
      types[post.type]++
    }
    post.ministries.forEach(topic => {
      if (!(topic.ministry in ministries)) {
        ministries[topic.ministry] = 0
      } else {
        ministries[topic.ministry]++
      }
    })
  })
  ctx.body = { ministries, types }
})

module.exports = router
