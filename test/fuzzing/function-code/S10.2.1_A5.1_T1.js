function f1(){
  var x;
  
  return typeof x;
}
assert.sameValue(f1(), "undefined");
function f2(){
  var x;
  
  return x;
}
assert.sameValue(f2(), undefined);