var counter = 0;
assert.throws(ReferenceError, function() {
  for ([ ...x ] of [[]]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
let x;