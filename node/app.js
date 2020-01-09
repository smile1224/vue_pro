var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
let multer = require('multer');


//服务器搭建
var app = express();

//中间件配置

//multer  *** 需要分发到不同的目录
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('user')!==-1 || req.url.indexOf('reg')!==-1){
      cb(null, path.join(__dirname, 'public','upload','user'))
    }else if(req.url.indexOf('banner')!==-1){
      cb(null, path.join(__dirname, 'public','upload','banner'))
    }else{
      cb(null, path.join(__dirname, 'public/upload/product'))
    }
  }
}) 

let multerObj = multer({storage});
// let multerObj = multer({dest:'./public/upload'}); //存储方式dest指定死了，storage分目录
app.use(multerObj.any())

//ejs模板引擎的配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

//body-parser的配置
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//多个资源托管
app.use(express.static(path.join(__dirname, 'public','template')));
app.use('/admin',express.static(path.join(__dirname, 'public','admin')));// '/admin' 是个别名  别名资源找不到就直接报错了
app.use(express.static(path.join(__dirname, 'public')));

//接口响应  

//用户端
app.all('/api/*',require('./routes/api/params'));//处理所有api下的公共参数, all 后面要的是一个函数

app.use('/api/home', require('./routes/api/home'));
app.use('/api/follow', require('./routes/api/follow'));
app.use('/api/column', require('./routes/api/column'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/reg', require('./routes/api/reg'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/logout', require('./routes/api/logout'));
app.use('/api/banner', require('./routes/api/banner'));
app.use('/api/send-code', require('./routes/api/send-code'));

//管理端
app.use('/admin/banner',require('./routes/admin/banner'))

//代理端
app.use('/proxy/juhe', require('./routes/proxy/juhe'));
//推送端



// 处理404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');

  res.send({
    err:1,
    msg:'不存在的接口名'
  })

});

module.exports = app;
