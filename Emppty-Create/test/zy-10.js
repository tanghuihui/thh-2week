/**
 * Created by Administrator on 2015/6/17.
 */

var should = require('should');
var Q = require('q');

var query = function(sql) {
    var deferred = Q.defer();
    if(sql) {
        deferred.resolve(1);
    } else {
        deferred.reject(-1);
    }
    return deferred.promise;
}

//原实例
//describe('Original Instance', function() {
//    it('Original Instance Unbelievable！！！', function() {
//        //query('anything').then(function(data) {
//        //    console.log(typeof data);
//        //    console.log( data);
//        // return   data.should.eventually.equal(2);
//        //    done();
//        //
//        //},
//        //    function (err) {
//        //        done(err);
//        //    });
//
//        //query('anything').then(function(data) {
//        //    console.log(typeof data);
//        //    console.log( data);
//        //    (1).should.equal(2);
//
//        }).done();
//
//     //   return promise.should.become(5);
//
//
//
//
//    });
//});


//修改报出 Error: timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.
//describe('Error: timeout of 2000ms exceeded. Ensure the done() callback is being called in this test', function() {
//    it('done', function() {
//        query('anything').then(function(data) {
//
//            console.log(typeof data);
//            console.log( data);
//            data.should.equal(2);
//            console.log([{
//                name:'done',
//                title:'done'
//            }]);
//           // done();
//
//            console.log("The Second Test")
//        });
//
//    });
//});
//
describe('Test Return Value', function() {
    it('Reutrn Only 1', function() {
        return   query('anything').then(function(data) {

            data.should.equal(1);
            console.log([{
                name:'这是正确的测试',
                title:'这是正确的测试'
            }]);
        });
    });
});
describe('Test Return Value', function() {
    it('Reutrn Only 1', function() {
        return   query(null).then(function(data) {

            data.should.equal(1);
            console.log([{
                name:'null为false',
                title:'null为false'
            }]);
        });
    });
});


