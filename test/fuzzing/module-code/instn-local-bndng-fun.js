var global = fnGlobalObject();
assert.sameValue(typeof test262, 'function', 'function value is hoisted');
assert.sameValue(test262(), 'test262', 'hoisted function value is correct');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
test262 = null;
assert.sameValue(test262, null, 'binding is mutable');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
function test262() { return 'test262'; }
assert.sameValue(
  test262, null, 'binding is not effected by evaluation of declaration'
);
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'),
  undefined,
  'global binding is not effected by evaluation of declaration'
);