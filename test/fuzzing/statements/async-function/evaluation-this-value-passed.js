async function foo(a) {
  assert.sameValue(this, a)
}
var obj = {};
foo.call(obj, obj).then($DONE, $DONE);