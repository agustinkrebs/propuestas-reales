const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const post = require('./routes/post');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/posts', post.routes());

module.exports = router;
