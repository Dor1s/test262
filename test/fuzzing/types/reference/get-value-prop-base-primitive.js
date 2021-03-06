Number.prototype.test262 = 'number prototype';
assert.sameValue(1..test262, 'number prototype');
String.prototype.test262 = 'string prototype';
assert.sameValue(''.test262, 'string prototype');
Boolean.prototype.test262 = 'Boolean prototype';
assert.sameValue(true.test262, 'Boolean prototype');
Symbol.prototype.test262 = 'Symbol prototype';
assert.sameValue(Symbol().test262, 'Symbol prototype');