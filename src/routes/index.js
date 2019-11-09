const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
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
  await ctx.render('index', { 
    appVersion: pkg.version,
  csv });
});

module.exports = router;
