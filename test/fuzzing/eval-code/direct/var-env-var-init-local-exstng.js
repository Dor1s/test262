var initial;
(function() {
  var x = 44443;
  eval('initial = x; var x;');
}());
assert.sameValue(initial, 44443);
assert.throws(ReferenceError, function() {
  x;
});