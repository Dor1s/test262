{
  let x = 2;
  L: {
    let x = 3;
    assert.sameValue(x, 3);
    break L;
    assert(false);
  }
  assert.sameValue(x, 2);
}