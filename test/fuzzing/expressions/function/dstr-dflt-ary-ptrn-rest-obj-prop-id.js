let length = "outer";
var callCount = 0;
var f;
f = function([...{ 0: v, 1: w, 2: x, 3: y, length: z }] = [7, 8, 9]) {
  assert.sameValue(v, 7);
  assert.sameValue(w, 8);
  assert.sameValue(x, 9);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 3);
  assert.sameValue(length, "outer", "the length prop is not set as a binding name");
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');