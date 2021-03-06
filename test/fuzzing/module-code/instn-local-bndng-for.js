var global = fnGlobalObject();
assert.sameValue(test262, undefined, 'value is initialized to `undefined`');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
for (var test262 = null; false; ) {}
assert.sameValue(test262, null, 'binding is mutable');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'),
  undefined,
  'global binding is not effected by evaluation of declaration'
);