var count = 0;
outer: for (let x = 0; x < 10;) {
  x++;
  for (let y = 0; y < 2;) {
    y++;
    count++;
    if (y == 2) continue outer;
  }
}
assert.sameValue(count, 20, "The value of `count` is `20`");