var should = require('should');
var max = require('../myfn/getmax');

describe('mytest getmax', ()=>{
   it("mytestgetmax",done=>{
       const maxnum = max([963,123,852,771]) 
       maxnum.should.equal(963)
       done()
   }) 

   //測試有沒有回傳undefined

   it('test undefined ', done=>{
       const maxinum=max([]);
       (maxinum === undefined).should.be.true
       done()
   })
})

/*
describe('測試的標題', function(){
    it('測試內容', function(done){
        // 進行測試
    })
    it('測試內容2', function(done){
        // 進行測試
    })
})
*/