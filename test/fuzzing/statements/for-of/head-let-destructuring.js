var value;
for ( let[x] of [[34]] ) {
  value = x;
}
assert.sameValue(typeof x, 'undefined', 'binding is block-scoped');
assert.sameValue(value, 34);