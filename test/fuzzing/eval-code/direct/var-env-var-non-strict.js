function testcase() {
  var x = 0;
  function inner() {
     eval("var x = 1");
     assert.sameValue(x, 1, "x");
  }
  inner();
}
testcase();