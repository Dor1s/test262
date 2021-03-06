async function foo() {
  var err = {};
  var caught = false;
  try {
    await Promise.reject(err);
  } catch(e) {
    caught = true;
    assert.sameValue(e, err);
  }
  assert(caught);
}