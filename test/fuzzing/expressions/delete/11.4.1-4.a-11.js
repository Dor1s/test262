function testcase() {
  function foo(a,b)
  {
    return (delete arguments.callee); 
  }
  var d = delete arguments.callee;
  assert.sameValue(d, true, 'd');
  assert.sameValue(arguments.callee, undefined, 'arguments.callee');
 }
testcase();