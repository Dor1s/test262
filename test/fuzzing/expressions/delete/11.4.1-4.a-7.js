function testcase() {
  var x = 1;
  var d = eval("delete x");
  assert.sameValue(d, false, 'd');
  assert.sameValue(x, 1, 'x');
 }
testcase();