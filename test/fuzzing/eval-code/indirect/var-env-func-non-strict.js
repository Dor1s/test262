var typeofInside;
(function() {
  (0,eval)("function fun() {}");
  typeofInside = typeof fun;
}());
assert.sameValue(typeofInside, "function");
assert.sameValue(typeof fun, "function");