function Base() {}
Object.defineProperty(Base, 'staticM', {
  set: function() {
    $ERROR("`Base.staticM` is unreachable.");
  }
});
class C extends Base {
  static staticM() {
    return 1;
  }
}
assert.sameValue(C.staticM(), 1, "`C.staticM()` returns `1`");