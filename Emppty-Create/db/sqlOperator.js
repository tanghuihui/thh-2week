/**
 * Created by Administrator on 2015/6/14.
 */
var mssql=require('mssql');
var config={
    user:'sa',
    password:'sql@123',
    server:'192.168.2.199',
    database:'testing',
    options:{
        encrypt:false
    }
};
exports.query=function(sql,callback){
    //Create Connection
    var connection=new mssql.Connection(config,function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Connected');
        }
        var request=new mssql.Request(connection);
        request.query(sql,callback);

    });

}