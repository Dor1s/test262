var global = fnGlobalObject();
assert.throws(ReferenceError, function() {
  typeof test262;
}, 'Binding is created but not initialized.');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
class test262 {}
assert.sameValue(typeof test262, 'function');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
test262 = null;
assert.sameValue(test262, null, 'binding is mutable');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'),
  undefined,
  'global binding is not effected by modification'
);