function fn() {
  let x = 3;
  {
    let y = 6;
    return x + y;
  }
}
assert.sameValue(fn(), 9);