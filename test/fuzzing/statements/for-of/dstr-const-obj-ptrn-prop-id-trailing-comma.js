var iterCount = 0;
for (const { x: y, } of [{ x: 23 }]) {
  assert.sameValue(y, 23);
  assert.throws(ReferenceError, function() {
    x;
  });
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');