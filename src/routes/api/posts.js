const KoaRouter = require('koa-router');

const router = new KoaRouter();



router.get('api.posts.list', '/', async (ctx) => {
  const postsList = await ctx.orm.post.findAll();
  var jsonList = []
  postsList.forEach(post => {
    var data = {}
    data["id"] = post.id;
    data['privacy'] = post.privacy;
    data['email'] = post.email;
    data['instagram'] = post.instagram;
    data['body'] = post.body;
    data['rating'] = post.rating;
    data['type'] = post.type;
    data['status'] = post.status;
    jsonList.push(data)
  })

  var items = jsonList;
  const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
  const header = Object.keys(items[0])
  let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  csv.unshift(header.join(','))
  csv = csv.join('\r\n')

  console.log(csv)
  ctx.body = csv;
});

router.get('api.post.show', '/:id', async (ctx) => {
  const post = await ctx.orm.post.findByPk(ctx.params.id);
  const ministry = await post.getMinistries();
  var data = {}
  data["id"] = post.id;
  data['privacy'] = post.privacy;
  data['email'] = post.email;
  data['instagram'] = post.instagram;
  data['body'] = post.body;
  data['rating'] = post.rating;
  data['type'] = post.type;
  data['status'] = post.status;

  const ministries = [];
  ministry.forEach(element => {
    ministries.push(element.ministry);
  });
  data.ministries = ministries;
  ctx.body = data;
});


router.get('api.download', '/download', async (ctx) => {
  await ctx.render('api/download', { 
  });
});



module.exports = router;