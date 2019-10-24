const KoaRouter = require('koa-router');

const router = new KoaRouter();

async function loadMinistry(ctx, next) {
    ctx.state.ministry = await ctx.orm.ministry.findByPk(ctx.params.id);
    return next();
  }

router.get('ministry.list', '/', async (ctx) => {
  const ministriesList = await ctx.orm.ministry.findAll();
  await ctx.render('ministry/index', {
    ministriesList,
    deleteMinistryPath: (ministry) => ctx.router.url('ministry.delete', { id: ministry.id }),
    newMinistryPath: ctx.router.url('ministry.new'),
  });
});

router.get('ministry.new', '/new', async (ctx) => {
  const ministry = ctx.orm.ministry.build();
  await ctx.render('ministry/new', {
    ministry,
    submitMinistryPath: ctx.router.url('ministry.create'),
  });
});

router.post('ministry.create', '/', async (ctx) => {
  const ministry = ctx.orm.ministry.build(ctx.request.body);
  try {
    await ministry.save({ fields: ['ministry'] });
    ctx.redirect(ctx.router.url('ministry.list'));
  } catch (validationError) {
    await ctx.render('ministry.new', {
        ministry,
      errors: validationError.errors,
      submitMinistryPath: ctx.router.url('ministry.create'),
    });
  }
});

router.del('ministry.delete', '/:id', loadMinistry, async (ctx) => {
  const { ministry } = ctx.state;
  await ministry.destroy();
  ctx.redirect(ctx.router.url('ministry.list'));
});

module.exports = router;
