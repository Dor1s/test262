function testcase() {
  assert.sameValue(delete arguments, false, 'delete arguments');
  assert.notSameValue(arguments, undefined, 'arguments');
 }
testcase();