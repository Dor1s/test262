var iterCount = 0;
for (const [arrow = () => {}] of [[]]) {
  assert.sameValue(arrow.name, 'arrow');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');