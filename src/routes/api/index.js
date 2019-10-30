const KoaRouter = require('koa-router');
const postsApi = require('./posts');
const ministryApi = require('./ministry');

const router = new KoaRouter();

router.use('/posts', postsApi.routes());
router.use('/ministry', ministryApi.routes());


module.exports = router;
