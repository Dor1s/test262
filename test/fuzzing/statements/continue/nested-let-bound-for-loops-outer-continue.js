var count = 0;
for (let x = 0; x < 10;) {
  x++;
  for (let y = 0; y < 2;) {
    y++;
    count++;
  }
  continue;
}
assert.sameValue(count, 20, "The value of `count` is `20`");