/**
 * Created by Administrator on 2015/6/15.
 */
var sqlOperator=require('../db/sqlOperator.js');
var Q=require('q');
var userinfo=function(username){
    var deferred = Q.defer();
    sqlOperator.query("select * from users where  name='"+username+"'",function(err,recordset){
        if(err)
            deferred.reject(err);
        if(recordset && recordset[0]){
            deferred.resolve(recordset[0]);
        }
        deferred.reject("Êý¾ÝÓÐÎó");

    });
    return deferred.promise;
};


var uorderlist=function(userid){
    var deferred = Q.defer();
    sqlOperator.query("select * from orders where  userID="+userid,function(err,recordset){
        if(err)
            deferred.reject(err);
        if(recordset){
          deferred.resolve(recordset);
        }
        deferred.reject(err);

    });
    return deferred.promise;
};

var uproductlist=function(productids){
    var deferred = Q.defer();
    sqlOperator.query("select * from products where  id in("+productids+")",function(err,recordset){
        if(err)
            deferred.reject(err);
        if(recordset){
            deferred.resolve(recordset);
        }
        deferred.reject(err);

    });
    return deferred.promise;
};

exports.sqlzy=userinfo('admin').then(function(userinfo){
    var userid=userinfo.id;
  return  uorderlist(userid);
}).then(function(orderlist){
    var productinfo="";
    for (i = 0; i < orderlist.length; i++){
        productinfo+=orderlist[i].productID+",";
    }
  return  productinfo=productinfo.substring(0,productinfo.length-1);

}).then(function(idlist){
   return  plist= uproductlist(idlist);

}).then(function(plist){
    return plist;
    //for(i=0;i<plist.length;i++){
    //    console.log(plist[i].name);
    //}
});


