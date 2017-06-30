var global = fnGlobalObject();
assert.sameValue(test262, undefined, 'initialized value');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
test262 = null;
assert.sameValue(test262, null, 'binding is mutable');
export var test262 = 23;