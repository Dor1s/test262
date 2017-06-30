function testcase() {
  var foo = function(){};
  // Now, deleting 'foo' directly should fail;
  var d = delete foo;
  assert.sameValue(d, false, 'd');
  assert.sameValue(typeof foo, 'function', 'typeof foo');
 }
testcase();