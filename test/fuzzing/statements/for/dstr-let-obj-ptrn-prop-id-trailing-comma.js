var iterCount = 0;
for (let { x: y, } = { x: 23 }; iterCount < 1; ) {
  assert.sameValue(y, 23);
  assert.throws(ReferenceError, function() {
    x;
  });
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');