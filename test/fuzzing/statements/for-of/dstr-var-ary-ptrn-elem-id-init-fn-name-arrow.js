var iterCount = 0;
for (var [arrow = () => {}] of [[]]) {
  assert.sameValue(arrow.name, 'arrow');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');