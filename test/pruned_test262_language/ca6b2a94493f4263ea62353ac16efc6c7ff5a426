function fn(a) {
  try {
    throw 'stuff1';
  } catch (a) {
    assert.sameValue(a, 'stuff1');
    // catch parameter shadowing function parameter name
    a = 2;
    assert.sameValue(a, 2);
  }
}
fn(1);