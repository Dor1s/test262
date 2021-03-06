var x = 0;
var env = { x: 1 };
env[Symbol.unscopables] = { x: true };
with (env) {
  assert.sameValue(x, 0, 'literal `true` value');
}
env[Symbol.unscopables].x = 'string';
with (env) {
  assert.sameValue(x, 0, 'non-empty string values');
}
env[Symbol.unscopables].x = 86;
with (env) {
  assert.sameValue(x, 0, 'non-zero number values');
}
env[Symbol.unscopables].x = {};
with (env) {
  assert.sameValue(x, 0, 'object values');
}
env[Symbol.unscopables].x = Symbol.unscopables;
with (env) {
  assert.sameValue(x, 0, 'Symbol values');
}