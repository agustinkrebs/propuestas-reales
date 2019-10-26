const KoaRouter = require('koa-router');

const router = new KoaRouter();

async function loadPost(ctx, next) {
  ctx.state.post = await ctx.orm.post.findOne({ where: { id:  ctx.params.id} });
  return next();
}


router.get('admin.login', '/', ctx => ctx.render('session/login', {
  checkSessionPath: ctx.router.url('session.check'),
  notice: ctx.flashMessage.notice,
}));

router.put('session.check', '/', async (ctx) => {
  console.log("holaaa");
  const { mail, password } = ctx.request.body;
  const user = await ctx.orm.user.findOne({ where: { mail } });
  const isPasswordCorrect = user && await user.checkPassword(password);
  if (isPasswordCorrect) {
    console.log("entra con clave");
    ctx.session.userId = user.id;
    return ctx.redirect(ctx.router.url('login.view'));
  } else {
    ctx.redirect(ctx.router.url('admin.login'))};
});

router.get('login.view', '/login-view', async (ctx) => {
  
  if (ctx.session.userId) {
    const posts = await ctx.orm.post.findAll();
      await ctx.render('session/view', {
        postList: posts,
        salirPath: ctx.router.url('session.destroy'),
        aprueboPath: post => ctx.router.url('post.aprobar', {id: post.id}),
        rechazoPath: post => ctx.router.url('post.rechazar', {id: post.id}),
      });
  } else {
      console.log("fallo");
      await ctx.render('session/login', {
        mail,
        checkSessionPath: ctx.router.url('session.check'),
        error: 'Incorrect mail or password',
      });
  }
  
});

router.patch('post.aprobar', '/apruebo/:id', loadPost, async (ctx) => {
  const { post } = ctx.state;
  const user = await ctx.orm.user.findOne({ where: { id:  ctx.session.userId} });
  await post.update({ privacy: 'aprobado', autorCambio:  user.mail});
  ctx.redirect(ctx.router.url('login.view'));
});

router.patch('post.rechazar', '/rechazo/:id', loadPost, async (ctx) => {
  const { post } = ctx.state;
  const user = await ctx.orm.user.findOne({ where: { id:  ctx.session.userId} });
  await post.update({ privacy: 'rechazado', autorCambio:  user.mail});
  ctx.redirect(ctx.router.url('login.view'));
});

router.delete('session.destroy', '/', (ctx) => {
  ctx.session = null;
  ctx.redirect(ctx.router.url('admin.login'));
});

module.exports = router;
