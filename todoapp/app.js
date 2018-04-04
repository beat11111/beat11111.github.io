var express = require('express');

//引入自定义模块
var todocontroller = require('/var/www/html/controller/todocontroller');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('/var/www/html/public'));

todocontroller(app);

app.listen(1003);


