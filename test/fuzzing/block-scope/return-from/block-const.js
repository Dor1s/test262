function fn() {
  const u = 3;
  {
    const v = 6;
    return u + v;
  }
}
assert.sameValue(fn(), 9);