var iterCount = 0;
for (var x in null, { key: 0 }) {
  assert.sameValue(x, 'key');
  iterCount += 1;
}
assert.sameValue(iterCount, 1);