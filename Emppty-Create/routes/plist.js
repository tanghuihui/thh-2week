/**
 * Created by Administrator on 2015/6/14.
 */
var express=require('express');
var router=express.Router();
var sqlOperator=require('../db/sqlOperator.js');
var zy=require('../db/zy.js');
var products=require('../Biz/products');
var q=require('q');
router.get('/',function(req,res,next){
    req.session.count = req.session.count?req.session.count+1:1;
      sqlOperator.query('select * from products',function(err,recordset){
        res.render('list', {title:'列表',uname:req.session.user,count:req.session.count, productlist:recordset    });


    })

    //res.render('list.hjs',{title:'列表',uname:req.session.user,count:req.session.count,productlist:products.products});

});


router.post('/delete',function(req,res,next){
    if(req.body.id){
        sqlOperator.query('select * from products where id='+req.body.id,function(err,recordset){
            if(recordset){
                sqlOperator.query('delete from products where id='+req.body.id,function(err,recordset){
                    if(err)
                        throw err;
                   // res.json({'error':err});//这种写法比较好。状态码
                    res.send("True");

                });
            }
        });
    }
});






router.get('/product', function(req, res, next) {
    if(req.query.id){
        sqlOperator.query('select * from products where id='+req.query.id,function(err,recordset){
            res.render('product', {title:'编辑产品',hid:req.query.id, productlist:recordset    });
        });
    }else{
        res.render('product', {title:'添加产品',hid:"", productlist:[
            {id:"",name:"",des:"",image:""}]    });
    }
});


router.get('/uplist', function(req, res, next) {
    zy.sqlzy.then(function(data) {
        res.render('uplist', {title:'列表',uname:req.session.user,count:req.session.count, productlist:data    });
    });

   // console.log(zy.sqlzy);
   // res.render('list', {title:'列表',uname:req.session.user,count:req.session.count, productlist:zy.sqlzy    });
});

/*
 sqlOperator.query("select * from users where  name='"+usernmae+"' and password='"+password+"'",function(err,recordset){
 if(recordset && recordset[0] ){
 req.session.user=recordset[0].name;
 res.redirect('/plist');

 }else {
 res.send("用户名不存在   <a href='/login'>重新登录</a>");
 }
 });
* */


router.post('/product', function(req, res, next) {
    if(req.body.hid){
        var sql1="update products set name='"+req.body.pname+"',des='"+req.body.pdes+"'where id="+req.body.hid;
        sqlOperator.query(sql1,function(err,recordset){
            if(err)
                throw err;
            res.redirect('/plist');
        });
    }else{
        var sql="insert into products (name,des,image) values('"+req.body.pname+"','"+req.body.pdes+"','http://img.1caifu.com/Upload/Company/Logo/20150421/2015042120084035052816.jpg')";

        sqlOperator.query(sql,function(err,recordset){
            console.log(err);
            if(err)
                throw err;
            res.redirect('/plist');
        });
    }




});
module.exports=router;