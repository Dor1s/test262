function fn(a) {
  let b = 1;
  var c = 1;
  const d = 1;
  {
    const a = 2;
    const b = 2;
    const c = 2;
    const d = 2;
    assert.sameValue(a, 2);
    assert.sameValue(b, 2);
    assert.sameValue(c, 2);
    assert.sameValue(d, 2);
  }
  assert.sameValue(a, 1);
  assert.sameValue(b, 1);
  assert.sameValue(c, 1);
  assert.sameValue(d, 1);
}
fn(1);