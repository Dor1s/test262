var iterCount = 0;
for (var let in { attr: null }) {
  assert.sameValue(let, 'attr');
  iterCount += 1;
}
assert.sameValue(iterCount, 1);