function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"length");
  assert.sameValue(desc.configurable, true, 'desc.configurable');
  assert.sameValue(desc.enumerable, false, 'desc.enumerable');
  assert.sameValue(desc.writable, true, 'desc.writable');
 }
testcase();