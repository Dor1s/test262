var global = this;
function testcase() {
  assert.sameValue(eval("typeof this"), "undefined", 'eval("typeof this")');
  assert.notSameValue(eval("this"), global, 'eval("this")');
}
testcase();