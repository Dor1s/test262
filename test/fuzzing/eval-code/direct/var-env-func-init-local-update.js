var initial;
(function() {
  var f = 88;
  eval('initial = f; function f() { return 33; }');
}());
assert.sameValue(typeof initial, 'function');
assert.sameValue(initial(), 33);
assert.throws(ReferenceError, function() {
  f;
});