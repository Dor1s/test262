var _;
var counter = 0;
assert.throws(TypeError, function() {
  for ([[ _ ]] of [[ , ]]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);