const KoaRouter = require('koa-router')
const postsApi = require('./posts')
const ministryApi = require('./ministry')
const statsApi = require('./stats')

const router = new KoaRouter()

router.use('/posts', postsApi.routes())
router.use('/ministry', ministryApi.routes())
router.use('/stats', statsApi.routes())

module.exports = router
