const KoaRouter = require('koa-router');
const postsApi = require('./posts');

const router = new KoaRouter();

router.use('/posts', postsApi.routes());

module.exports = router;