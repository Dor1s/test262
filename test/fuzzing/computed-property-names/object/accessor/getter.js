var A = {
  get ["a"]() {
    return "A";
  }
};
assert.sameValue(A.a, "A", "The value of `A.a` is `'A'`");