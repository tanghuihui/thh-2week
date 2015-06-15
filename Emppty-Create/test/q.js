/**
 * Created by Administrator on 2015/6/15.
 */

var events=require('events');
var eventEmitter=new events.EventEmitter();
var q=require('q');
var step1=function(callback) {//next
    console.log('step1 strat');
    setTimeout(function(){
        callback('step1');
        eventEmitter.emit('step1end');
    }, 3000);//∫¡√Î
};
//eventEmitter.on('step1end',function(){ console.log('step1--emd');






//});
var step2=function(callback) {
    console.log('step2 strat');
    setTimeout(function(){
        callback('step2');
        eventEmitter.emit('step2end');
    }, 2000);//∫¡√Î
};

var step3=function(callback) {
    console.log('step3 strat');
    setTimeout(function(){
        callback('step3');
        eventEmitter.emit('step3end');
    }, 1000);//∫¡√Î
};


var _callback=function(msg){
    console.log(msg+' End');
};

eventEmitter.on('step1end',function(){
    step1(_callback);
});
eventEmitter.on('step2end',function(){
    step2(_callback);
})
eventEmitter.on('step3end',function(){
    step3(_callback);
})





//step1(_callback);
//step2(_callback);
//step3(_callback);




/**
 * Created by Administrator on 2015/6/15.
 */
