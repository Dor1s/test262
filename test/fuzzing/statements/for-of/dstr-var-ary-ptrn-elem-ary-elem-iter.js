var iterCount = 0;
for (var [[x, y, z] = [4, 5, 6]] of [[[7, 8, 9]]]) {
  assert.sameValue(x, 7);
  assert.sameValue(y, 8);
  assert.sameValue(z, 9);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');