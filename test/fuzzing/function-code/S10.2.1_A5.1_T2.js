function f1(x){
  var x;
  
  return typeof x;
}
assert.sameValue(f1(), "undefined");
function f2(x){
  var x;
  
  return x;
}
assert.sameValue(f2(), undefined);