/**
 * Created by Administrator on 2015/6/12.
 */
var express=require('express');
var router = express.Router();
var us=require('../Biz/users');
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
   if(us.users.getuser(usernmae,password)){
       req.session.user=usernmae;
       res.redirect('/plist');
   }else {
       res.send("用户名不存在");
   }

});



module.exports=router;
