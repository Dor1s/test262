var thenable = {
  then: function (resolve, reject) {
    resolve(42);
  }
}
async function foo() {
  assert.sameValue(await thenable, 42);
}
foo().then($DONE, $DONE);