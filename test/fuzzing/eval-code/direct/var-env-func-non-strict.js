var typeofInside;
(function() {
  eval('function fun() {}');
  typeofInside = typeof fun;
}());
assert.sameValue(typeofInside, 'function');
assert.sameValue(typeof fun, 'undefined');