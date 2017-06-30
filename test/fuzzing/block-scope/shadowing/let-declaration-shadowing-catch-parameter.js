try {
  throw 'stuff1';
} catch (a) {
  {
    // let declaration shadowing catch parameter
    let a = 3;
    assert.sameValue(a, 3);
  }
  assert.sameValue(a, 'stuff1');
}