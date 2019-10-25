const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const post = require('./routes/post');
const ministry = require('./routes/ministry');


const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/posts', post.routes());
router.use('/ministry', ministry.routes());

module.exports = router;
