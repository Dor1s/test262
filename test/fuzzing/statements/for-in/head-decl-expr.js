var iterCount = 0;
for (let x in null, { key: 0 }) {
  assert.sameValue(x, 'key');
  iterCount += 1;
}
assert.sameValue(iterCount, 1);