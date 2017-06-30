var value;
function dstr(a, [b]) {
  arguments[0] = 2;
  value = a;
}
dstr(1, []);
assert.sameValue(value, 1);