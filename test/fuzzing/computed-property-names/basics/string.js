function ID(x) {
  return x;
}
var object = {
  a: 'A',
  ['b']: 'B',
  c: 'C',
  [ID('d')]: 'D',
};
assert.sameValue(object.a, 'A', "The value of `object.a` is `'A'`. Defined in `object` as `a: 'A'`");
assert.sameValue(object.b, 'B', "The value of `object.b` is `'B'`. Defined in `object` as `['b']: 'B'`");
assert.sameValue(object.c, 'C', "The value of `object.c` is `'C'`. Defined in `object` as `c: 'C'`");
assert.sameValue(object.d, 'D', "The value of `object.d` is `'D'`. Defined in `object` as `[ID('d')]: 'D'`");
assert(
  compareArray(Object.keys(object), ['a', 'b', 'c', 'd']),
  "`compareArray(Object.keys(object), ['a', 'b', 'c', 'd'])` returns `true`"
);