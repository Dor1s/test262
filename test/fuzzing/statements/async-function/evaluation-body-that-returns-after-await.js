async function foo() {
  await Promise.resolve();
  return 42;
}
foo().then(function (v) {
  assert.sameValue(v, 42);
  $DONE();
}, $DONE);