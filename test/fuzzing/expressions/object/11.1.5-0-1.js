  var s1 = "In getter";
  var s2 = "In setter";
  var s3 = "Modified by setter";
  var o;
  eval("o = {get foo(){ return s1;},set foo(arg){return s2 = s3}};");
assert.sameValue(o.foo, s1, 'o.foo');
  o.foo=10;
assert.sameValue(s2, s3, 's2');