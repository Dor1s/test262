var iterCount = 0;
for (var let of [23]) {
  assert.sameValue(let, 23);
  iterCount += 1;
}
assert.sameValue(iterCount, 1);