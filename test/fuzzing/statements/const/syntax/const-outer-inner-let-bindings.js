const x = "outer_x";
const y = "outer_y";
var i = 0;
for (const x = "inner_x"; i < 1; i++) {
  const y = "inner_y";
  assert.sameValue(x, "inner_x");
  assert.sameValue(y, "inner_y");
}
assert.sameValue(x, "outer_x");
assert.sameValue(y, "outer_y");