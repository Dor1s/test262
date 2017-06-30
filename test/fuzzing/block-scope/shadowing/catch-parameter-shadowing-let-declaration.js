{
  let a = 3;
  try {
    throw 'stuff2';
  } catch (a) {
    assert.sameValue(a, 'stuff2');
    // catch parameter shadowing let declaration
    a = 4;
    assert.sameValue(a, 4);
  }
  assert.sameValue(a, 3);
}