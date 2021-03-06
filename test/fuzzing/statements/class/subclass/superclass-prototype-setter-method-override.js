function Base() {}
Base.prototype = {
  set m(_) {
    $ERROR("`Base.prototype.m` is unreachable.");
  }
};
class C extends Base {
  m() {
    return 1;
  }
}
assert.sameValue(new C().m(), 1, "`new C().m()` returns `1`");