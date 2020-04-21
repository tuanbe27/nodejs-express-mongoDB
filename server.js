//khai báo module sử dụng
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
require('./api/model/model')

//thiết lập connection
mongoose.connect('mongodb://localhost/task', {
    useNewUrlParser: true,  
    useCreateIndex: true,   
    useUnifiedTopology: true,
    
})
//thiết lập phân tích các request tới server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//truy cập tới các tệp tin trong route
var route = require('./api/route/routes')
route(app);

// lắng nghe các kết nối trên máy chủ và cổng được chỉ định
app.listen(3000, ()=> {
    console.log("connected to port 3000")
})
