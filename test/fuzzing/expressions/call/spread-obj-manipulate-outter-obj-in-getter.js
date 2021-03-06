var o = { a: 0, b: 1 };
var cthulhu = { get x() {
  delete o.a;
  o.b = 42;
  o.c = "ni";
}};
var callCount = 0;
(function(obj) {
  assert.sameValue(obj.hasOwnProperty("a"), false);
  assert.sameValue(obj.b, 42);
  assert.sameValue(obj.c, "ni");
  assert(obj.hasOwnProperty("x"));
  assert.sameValue(Object.keys(obj).length, 3);
  callCount += 1;
}({...cthulhu, ...o}));
assert.sameValue(callCount, 1);