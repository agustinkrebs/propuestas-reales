const KoaRouter = require('koa-router')

const hello = require('./routes/hello')
const index = require('./routes/index')
const post = require('./routes/post')
const ministry = require('./routes/ministry')
const session = require('./routes/session')
const api = require('./routes/api')
const vote = require('./routes/vote')
const dashboard = require('./routes/dashboard')

const router = new KoaRouter()

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
    currentUser:
      ctx.session.userId &&
      (await ctx.orm.user.findOne({ where: { id: ctx.session.userId } })),
    createSessionPath: ctx.router.url('session.create'),
    destroySessionPath: ctx.router.url('session.destroy'),
  })
  return next()
})

router.use('/', index.routes())
router.use('/hello', hello.routes())
router.use('/posts', post.routes())
router.use('/ministry', ministry.routes())
router.use('/session', session.routes())
router.use('/api', api.routes())
router.use('/votes', vote.routes())
router.use('/dashboard', dashboard.routes())

module.exports = router
