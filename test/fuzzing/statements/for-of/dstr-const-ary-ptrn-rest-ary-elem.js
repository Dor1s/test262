var iterCount = 0;
for (const [...[x, y, z]] of [[3, 4, 5]]) {
  assert.sameValue(x, 3);
  assert.sameValue(y, 4);
  assert.sameValue(z, 5);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');