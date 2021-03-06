var x = 0;
var env = { x: 1 };
env[Symbol.unscopables] = {};
with (env) {
  assert.sameValue(x, 1, 'undefined (no property defined)');
}
env[Symbol.unscopables].x = false;
with (env) {
  assert.sameValue(x, 1, 'literal `false` value');
}
env[Symbol.unscopables].x = undefined;
with (env) {
  assert.sameValue(x, 1, 'literal `undefined` value');
}
env[Symbol.unscopables].x = null;
with (env) {
  assert.sameValue(x, 1, 'null value');
}
env[Symbol.unscopables].x = 0;
with (env) {
  assert.sameValue(x, 1, 'literal `0` number value');
}
env[Symbol.unscopables].x = '';
with (env) {
  assert.sameValue(x, 1, 'empty string value');
}