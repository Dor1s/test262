var obj = Object.create(null);
var value;
obj.key = 1;
for ( let[x] in obj ) {
  value = x;
}
assert.sameValue(typeof x, 'undefined', 'binding is block-scoped');
assert.sameValue(value, 'k');