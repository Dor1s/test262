function testcase() {
  var x = 1;
  // Now, deleting 'x' directly should fail;
  var d = delete x;
  assert.sameValue(d, false, 'd');
  assert.sameValue(x, 1, 'x');
 }
testcase();