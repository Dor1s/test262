let length = "outer";
var iterCount = 0;
for (var [...{ 0: v, 1: w, 2: x, 3: y, length: z }] = [7, 8, 9]; iterCount < 1; ) {
  assert.sameValue(v, 7);
  assert.sameValue(w, 8);
  assert.sameValue(x, 9);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 3);
  assert.sameValue(length, "outer", "the length prop is not set as a binding name");
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');