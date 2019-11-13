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
    const postsList = await ctx.orm.post.findAll();
  const associationList = await ctx.orm.post_ministries.findAll();
  var jsonList = []
  postsList.forEach(post => {
    var ministries = []
      associationList.forEach(element => {
        console.log(element.postId, post.id);
        if (element.postId == post.id)
        {
          ministries.push(element.ministryId)
        }
      });
    var data = {}
    data["id"] = post.id;
    data['privacy'] = post.privacy;
    data['email'] = post.email;
    data['instagram'] = post.instagram;
    data['body'] = post.body;
    data['rating'] = post.rating;
    data['type'] = post.type;
    data['status'] = post.status;
    data['approved by'] = post.autorCambio
    console.log('hola');
    console.log(post.autorCambio);
    // Como ministries está separado por comas, lo casteamos a string y cambiamos por punto y coma 
    var ministries_string =  ministries.toString();
    data['ministries'] = ministries_string.replace(/,/g, ';');
    jsonList.push(data)
  })

  var items = jsonList;
  const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
  const header = Object.keys(items[0])
  let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  csv.unshift(header.join(','))
  csv = csv.join('\r\n')
  
      await ctx.render('session/view', {
        postList: posts,
        csv,
        salirPath: ctx.router.url('session.destroy'),
        aprueboPath: post => ctx.router.url('post.aprobar', {id: post.id}),
        rechazoPath: post => ctx.router.url('post.rechazar', {id: post.id}),
      });
  } else {
      console.log("fallo");
      await ctx.render('session/login', {
        checkSessionPath: ctx.router.url('session.check'),
        error: 'Incorrect mail or password',
      });
  }
  
  
});

router.patch('post.aprobar', '/apruebo/:id', loadPost, async (ctx) => {
  const { post } = ctx.state;
  const user = await ctx.orm.user.findOne({ where: { id:  ctx.session.userId} });
  await post.update({ status: 'aprobado', autorCambio:  user.mail});
  ctx.redirect(ctx.router.url('login.view'));
});

router.patch('post.rechazar', '/rechazo/:id', loadPost, async (ctx) => {
  const { post } = ctx.state;
  const user = await ctx.orm.user.findOne({ where: { id:  ctx.session.userId} });
  await post.update({ status: 'rechazado', autorCambio:  user.mail});
  ctx.redirect(ctx.router.url('login.view'));
});

router.delete('session.destroy', '/', (ctx) => {
  ctx.session.userId = 0;
  ctx.session = null;
  ctx.redirect(ctx.router.url('admin.login'));
});

module.exports = router;
