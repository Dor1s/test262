var iterCount = 0;
for (let { x: [y], } of [{ x: [45] }]) {
  assert.sameValue(y,45);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');