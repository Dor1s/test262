var count = 0;
label: for (let x = 0; x < 10;) {
  while (true) {
    x++;
    count++;
    continue label;
  }
}
assert.sameValue(count, 10, "The value of `count` is `10`");