async function foo() {
  var thenable = { then: 42 };
  var res = await thenable;
  assert.sameValue(res, thenable);
}
foo().then($DONE, $DONE);