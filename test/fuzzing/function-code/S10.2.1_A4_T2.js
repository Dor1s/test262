function f1(){
  var x;
  
  return x;
  
  function x(){
    return 7;
  }
}
assert.sameValue(f1().constructor.prototype, Function.prototype);
function f2(){
  var x;
  
  return typeof x;
  
  function x(){
    return 7;
  }
}
assert.sameValue(f2(), "function");