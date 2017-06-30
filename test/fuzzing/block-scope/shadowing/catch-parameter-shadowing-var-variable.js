function fn() {
  var a = 1;
  try {
    throw 'stuff3';
  } catch (a) {
    // catch parameter shadowing var variable
    assert.sameValue(a, 'stuff3');
  }
  assert.sameValue(a, 1);
}
fn();