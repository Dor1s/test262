var empty = Object.create(null);
var obj, value;
for (obj = { get ['x' in empty]() { return 'via get'; } }; ; ) {
  value = obj.false;
  break;
}
assert.sameValue(value, 'via get');
for (obj = { set ['x' in empty](param) { value = param; } }; ; ) {
  obj.false = 'via set';
  break;
}
assert.sameValue(value, 'via set');