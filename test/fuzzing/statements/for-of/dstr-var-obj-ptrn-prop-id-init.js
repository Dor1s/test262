var iterCount = 0;
for (var { x: y = 33 } of [{ }]) {
  assert.sameValue(y, 33);
  assert.throws(ReferenceError, function() {
    x;
  });
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');