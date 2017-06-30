function testcase() {
  
  var desc = Object.getOwnPropertyDescriptor(arguments,"length");
  assert.notSameValue(desc, undefined);
 }
testcase();