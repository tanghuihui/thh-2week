/**
 * Created by Administrator on 2015/6/12.
 */
var express=require('express');//����express
var path=require('path');
var bodyParser=require('body-parser');
var session=require('express-session');
var uuid=require('uuid');
var fs=require('fs');
var moment=require('moment');
var app=express();//ʵ����

var home=require('./routes/index');
var plist=require('./routes/plist');


app.set('views',path.join(__dirname,'views'));
app.set('view engine','hjs');
app.use(session({
        genid: function (req) {
            return uuid.v4();//随机
        },
        secret: 'Empty-Create',
        resave: false,
        saveUninitialized: false
    }
));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
//app.set('view engine','html');
//app.engine('html',require('hjs').__express)
app.use(function(req,res,next){
    console.log(req.originalUrl);
    next();
});

app.use('/',home);
app.use('/plist',function(req,res,next){
        if(!req.session || !req.session.user) {;
            return  res.redirect('/login');
        }else{
            var fs_path=path.join(__dirname,'/logs/'+moment().format("YYYY-MMMM-DO-h-mm-ss")+'.txt');
            var fs_content='时间:'+ moment().format()+"\t用户名："+req.session.user+"\t访问的地址："+req.originalUrl+'\t\n';
            fs.appendFile(fs_path,fs_content);
            next();
        }

})
app.use('/plist',plist);
//app.get('/',function(req,res,next){
//   // res.send('Home');
////res.render('index.hjs',{title:'hjs'});
//    res.render('index.hjs',{title:'hjs'});
//  //  res.render('index.html',{title:'hjs'});
//
//});


app.get('/list',function(req,res,next){
    res.send('List');


});
app.use(function(req,res,next){
    res.status(404);
    res.render('error',{statusCode:404});

})
module.exports=app;




