var value;
function rest(a, ...b) {
  arguments[0] = 2;
  value = a;
}
rest(1);
assert.sameValue(value, 1);