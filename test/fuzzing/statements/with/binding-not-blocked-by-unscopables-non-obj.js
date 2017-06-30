var test262ToString = {};
var env = { toString: test262ToString };
env[Symbol.unscopables] = '';
with (env) {
  assert.sameValue(toString, test262ToString);
}