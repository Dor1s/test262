function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"callee");
  assert.notSameValue(desc, undefined);
 }
testcase();