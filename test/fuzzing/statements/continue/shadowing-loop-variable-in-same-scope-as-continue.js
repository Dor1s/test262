var count = 0;
for (let x = 0; x < 10;) {
  x++;
  count++;
  {
    let x = "hello";
    continue;
  }
}
assert.sameValue(count, 10, "The value of `count` is `10`");