var global = fnGlobalObject();
assert.sameValue(test262().next().value, 23, 'initialized value');
assert.sameValue(
  Object.getOwnPropertyDescriptor(global, 'test262'), undefined
);
test262 = null;
assert.sameValue(test262, null, 'binding is mutable');
export function* test262() { return 23; }