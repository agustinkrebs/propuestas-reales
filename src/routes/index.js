const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  const postsList = await ctx.orm.post.findAll();
  const associationList = await ctx.orm.post_ministries.findAll();
  var jsonList = []
  postsList.forEach(post => {
    var ministries = []
      associationList.forEach(element => {
        console.log(element.postId, post.id);
        if (element.postId == post.id)
        {
          console.log('hola');
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
  await ctx.render('index', { 
    appVersion: pkg.version,
  csv });
});

module.exports = router;
