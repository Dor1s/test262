let x = "outer_x";
let y = "outer_y";
for (let x = "inner_x", i = 0; i < 1; i++) {
  let y = "inner_y";
  assert.sameValue(x, "inner_x");
  assert.sameValue(y, "inner_y");
}
assert.sameValue(x, "outer_x");
assert.sameValue(y, "outer_y");