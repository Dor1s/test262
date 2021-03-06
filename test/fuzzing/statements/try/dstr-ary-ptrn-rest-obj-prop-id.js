let length = "outer";
var ranCatch = false;
try {
  throw [7, 8, 9];
} catch ([...{ 0: v, 1: w, 2: x, 3: y, length: z }]) {
  assert.sameValue(v, 7);
  assert.sameValue(w, 8);
  assert.sameValue(x, 9);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 3);
  assert.sameValue(length, "outer", "the length prop is not set as a binding name");
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');