/**
 * Created by Administrator on 2015/6/12.
 */
var http=require('http');
var app=require('../app.js');
//var express=require('express');//����express
//var app=express();//ʵ����
//
//
//
//app.get('/',function(req,res,next){
//    res.send('Home');
//
//
//});
//
//
//app.get('/list',function(req,res,next){
//    res.send('List');
//
//
//});



http.createServer(app


    //function(req,res){
    //    res.writeHead(200,{'Content-type':"text/html;charset:utf-8"});
    //    res.end('��ã����ۻ�');
    //}














).listen(3001).on('listening',function(){
    console.log('Running');
});