var x;
var counter = 0;
assert.throws(TypeError, function() {
  for ([{ x }] of [[null]]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);