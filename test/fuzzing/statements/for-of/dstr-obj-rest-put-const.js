const rest = null;
var counter = 0;
assert.throws(TypeError, function() {
  for ({...rest} of [{}
]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);