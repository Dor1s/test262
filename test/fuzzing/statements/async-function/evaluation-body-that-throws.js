async function foo() {
  throw 1;
}
foo().then(function () {
  $DONE("Should not be called");
}, function (e) {
  assert.sameValue(e, 1);
  $DONE();
});