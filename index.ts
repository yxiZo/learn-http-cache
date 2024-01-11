import express from "express";

const app = express();
const port = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
 
// index page
app.get('/', function(req, res) {
  // max-age 单位秒
  // no-cache
  // no-store
  res.setHeader('Cache-Control', 'public, max-age=1000')
  res.render('pages/index', { text: "aaaa" });
});

// about page
app.get('/about', function(req, res) {
  console.log(req.url, req.headers['if-modified-since'])
  if (req.headers['if-modified-since']) {
    // 检查时间戳

    // 如果发现 资源没有改变 设置 304 Not Modified
    res.statusCode = 304
  }
  // else {
  //   res.setHeader('Last-Modified', new Date().toString())
  // }
  res.render('pages/about', { text: "aaaa" });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});