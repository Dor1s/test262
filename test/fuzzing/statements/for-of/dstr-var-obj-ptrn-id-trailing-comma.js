var iterCount = 0;
for (var { x, } of [{ x: 23 }]) {
  assert.sameValue(x, 23);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');