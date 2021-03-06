var error = {};
var thenable = {
  then: function (resolve, reject) {
    throw error;
  }
}
async function foo() {
  var caught = false;
  try {
    await thenable;
  } catch(e) {
    caught = true;
    assert.sameValue(e, error);
  }
  assert(caught);
}
foo().then($DONE, $DONE);