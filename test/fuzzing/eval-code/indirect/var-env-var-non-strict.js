(function() {
  var x = 0;
  (0,eval)("var x = 1;");
  assert.sameValue(x, 0, "x");
}());
assert.sameValue(x, 1);