var iterCount = 0;
for (var x of [99]) {
  var x;
  assert.sameValue(x, 99);
  iterCount += 1;
}
assert.sameValue(iterCount, 1);