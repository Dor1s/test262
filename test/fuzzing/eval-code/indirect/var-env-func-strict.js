var typeofInside;
(function() {
  (0,eval)("'use strict'; function fun(){}");
  typeofInside = typeof fun;
}());
assert.sameValue(typeofInside, "undefined");
assert.sameValue(typeof fun, "undefined");