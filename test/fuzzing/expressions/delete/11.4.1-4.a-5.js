function testcase() {
  var o = new Object();
  o.x = 1;
  var d;
  with(o)
  {
    d = delete o;
  }
  assert.sameValue(d, false, 'd');
  assert.sameValue(typeof(o), 'object', 'typeof(o)');
  assert.sameValue(o.x, 1, 'o.x');
 }
testcase();