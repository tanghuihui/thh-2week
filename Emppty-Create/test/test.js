/**
 * Created by Administrator on 2015/6/15.
 */

    var events=require('events');
var eventEmitter=new events.EventEmitter();

var step1=function(callback) {//next
    console.log('step1 strat');
    setTimeout(function(){

        eventEmitter.emit('step1end');
        callback('step1');
    }, 3000);//∫¡√Î
};
eventEmitter.on('step1end',function(){
    setTimeout(function(){
        console.log('step1--emd');
    },100);

});
var step2=function(callback) {
    console.log('step2 strat');
    setTimeout(function(){
        callback('step2');

    }, 2000);//∫¡√Î
};

var step3=function(callback) {
    console.log('step3 strat');
    setTimeout(function(){
        callback('step3');
    }, 1000);//∫¡√Î
};


var _callback=function(msg){
    console.log(msg+' End');
};
step1(_callback);
//step2(_callback);
//step3(_callback);


//step1(function(msg){
//    _callback(msg);
//    step2(function(msg){
//        _callback(msg);
//        step3(function(msg){
//            _callback(msg);
//        });
//    });
//});


