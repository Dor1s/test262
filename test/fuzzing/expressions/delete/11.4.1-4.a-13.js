function testcase() {
  var a = [1,2,3]
  a.x = 10;
  var d = delete a 
  assert.sameValue(d, false, 'd');
  assert.sameValue(Array.isArray(a), true, 'Array.isArray(a)');
 }
testcase();