async function foo() {
  return 42;
}
foo().then(function (v) {
  assert.sameValue(v, 42);
  $DONE();
}, $DONE);