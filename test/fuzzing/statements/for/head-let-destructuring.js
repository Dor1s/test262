var value;
for ( let[x] = [23]; ; ) {
  value = x;
  break;
}
assert.sameValue(typeof x, 'undefined', 'binding is block-scoped');
assert.sameValue(value, 23);