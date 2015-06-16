/**
 * Created by Administrator on 2015/6/14.
 */

var should=require('should');
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
           // console.log('Connected');
        }
        var request=new mssql.Request(connection);
        request.query(sql,callback);

    });

}







var getuser=function(){
     exports.query('select * from where users',function(err,dataset){
        return dataset;
    }
)};
var getuseradmin=function(){
    exports.query('select * from where users where name=admin',function(err,dataset){
            return dataset;
        }
    )};


describe('Test users',function(){
    it('get users length',function(done){
        exports.query("select * from users ",function(err,dataset){
            if(err) return done(err);
            done();
        });




    });
});

describe('Test Admin',function(){
    it('get admin length',function(done){
        exports.query("select * from users where name='admin' ",function(err,dataset){
            if(err) return done(err);
            dataset.should.have.length(1);
            done();
        });




    });
});

//describe('Test String Functions',function(){
//    it('should begin with H ',function(){
//        getuseradmin().save(done);
//    });
//});