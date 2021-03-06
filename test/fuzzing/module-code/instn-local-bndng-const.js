var global = fnGlobalObject();
assert.throws(ReferenceError, function() {
  typeof test262;
}, 'Binding is created but not initialized.');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
const test262 = 23;
assert.sameValue(test262, 23);
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
assert.throws(TypeError, function() {
  test262 = null;
});
assert.sameValue(test262, 23, 'binding is not mutable');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'),
  undefined,
  'global binding is not effected by attempts to modify'
);