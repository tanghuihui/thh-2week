/**
 * Created by Administrator on 2015/6/16.
 */
var should=require('should');



var getArry=function(){
    return [1,2,3];
};

var getString=function(){
    return '';
}

describe('Test arry',function(){
    it('should return 2',function(){
        getArry().should.have.length(3);
    });
});

describe('Test String Functions',function(){
    it('should begin with H ',function(){
        getString().should.startWith("H");
    });
});