function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"callee");
  assert.sameValue(desc.configurable, true, 'desc.configurable');
  assert.sameValue(desc.enumerable, false, 'desc.enumerable');
  assert.sameValue(desc.writable, true, 'desc.writable');
  assert.sameValue(desc.hasOwnProperty('get'), false, 'desc.hasOwnProperty("get")');
  assert.sameValue(desc.hasOwnProperty('set'), false, 'desc.hasOwnProperty("set")');
 }
testcase();