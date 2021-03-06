class C {
  ['constructor']() {
    return 1;
  }
}
assert(
  C !== C.prototype.constructor,
  "The result of `C !== C.prototype.constructor` is `true`"
);
assert.sameValue(new C().constructor(), 1, "`new C().constructor()` returns `1`");