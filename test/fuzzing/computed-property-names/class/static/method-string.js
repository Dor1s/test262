class C {
  static a() { return 'A'}
  static ['b']() { return 'B'; }
  static c() { return 'C'; }
  static ['d']() { return 'D'; }
}
assert.sameValue(C.a(), 'A', "`C.a()` returns `'A'`. Defined as `static a() { return 'A'}`");
assert.sameValue(C.b(), 'B', "`C.b()` returns `'B'`. Defined as `static ['b']() { return 'B'; }`");
assert.sameValue(C.c(), 'C', "`C.c()` returns `'C'`. Defined as `static c() { return 'C'; }`");
assert.sameValue(C.d(), 'D', "`C.d()` returns `'D'`. Defined as `static ['d']() { return 'D'; }`");
assert(
  compareArray(Object.keys(C), []),
  "`compareArray(Object.keys(C), [])` returns `true`"
);
assert(
  compareArray(Object.getOwnPropertyNames(C), ['length', 'prototype', 'a', 'b', 'c', 'd', 'name']),
  "`compareArray(Object.getOwnPropertyNames(C), ['length', 'prototype', 'a', 'b', 'c', 'd', 'name'])` returns `true`"
);