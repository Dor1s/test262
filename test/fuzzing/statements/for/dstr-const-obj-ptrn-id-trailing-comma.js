var iterCount = 0;
for (const { x, } = { x: 23 }; iterCount < 1; ) {
  assert.sameValue(x, 23);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');