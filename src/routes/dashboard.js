const KoaRouter = require('koa-router')

const router = new KoaRouter()

router.get('dashboard', '/', async ctx => ctx.render('dashboard/index'))

module.exports = router
