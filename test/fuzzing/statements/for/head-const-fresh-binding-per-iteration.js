let z = 1;
let s = 0;
for (const x = 1; z < 2; z++) {
  s += x + z;
}
assert.sameValue(s, 2, "The value of `s` is `2`");