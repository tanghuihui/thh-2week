/**
 * Created by Administrator on 2015/6/12.
 */
var express=require('express');
var router = express.Router();
var us=require('../Biz/users');
var sqlOperator=require('../db/sqlOperator.js');
router.get('/',function(req,res,next){
    // res.send('Home');
//res.render('index.hjs',{title:'hjs'});
    res.render('index.hjs',{title:'首页'});
    //  res.render('index.html',{title:'hjs'});

});

router.get('/logout',function(req,res,next){
    req.session.destroy();
  return  res.redirect('/login');

});
///login get方法
router.get('/login',function(req,res,next){
    res.render('login.hjs',{title:'登录'});

});

///login post 方法
router.post('/login',function(req,res,next){

    var usernmae=req.body.username.trim();
    var password=req.body.password.trim();

    sqlOperator.query("select * from users where  name='"+usernmae+"' and password='"+password+"'",function(err,recordset){
        if(recordset && recordset[0] ){
                req.session.user=recordset[0].name;
                res.redirect('/plist');

        }else {
            res.send("用户名不存在   <a href='/login'>重新登录</a>");
        }
    });


   //if(us.users.getuser(usernmae,password)){
   //    req.session.user=usernmae;
   //    res.redirect('/plist');
   //}else {
   //    res.send("用户名不存在");
   //}

});



module.exports=router;
