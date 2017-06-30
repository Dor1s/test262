function ID(x) {
  return x;
}
class C {
  a() { return 'A'}
  ['b']() { return 'B'; }
  c() { return 'C'; }
  [ID('d')]() { return 'D'; }
}
assert.sameValue(new C().a(), 'A', "`new C().a()` returns `'A'`. Defined as `a() { return 'A'}`");
assert.sameValue(new C().b(), 'B', "`new C().b()` returns `'B'`. Defined as `['b']() { return 'B'; }`");
assert.sameValue(new C().c(), 'C', "`new C().c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(new C().d(), 'D', "`new C().d()` returns `'D'`. Defined as `[ID('d')]() { return 'D'; }`");
assert(
  compareArray(Object.keys(C.prototype), []),
  "`compareArray(Object.keys(C.prototype), [])` returns `true`"
);
assert(
  compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a', 'b', 'c', 'd']),
  "`compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a', 'b', 'c', 'd'])` returns `true`"
);