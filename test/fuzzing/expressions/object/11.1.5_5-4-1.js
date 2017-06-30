  var o = {foo : 1};
  var desc = Object.getOwnPropertyDescriptor(o,"foo");
assert.sameValue(desc.value, 1, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, true, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');