var iterCount = 0;
for (const { x: [y], } of [{ x: [45] }]) {
  assert.sameValue(y,45);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');