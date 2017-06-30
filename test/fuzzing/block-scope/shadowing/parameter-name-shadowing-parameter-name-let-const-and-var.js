function fn(a) {
  let b = 1;
  var c = 1;
  const d = 1;
  (function(a, b, c, d) {
    a = 2;
    b = 2;
    c = 2;
    d = 2;
    assert.sameValue(a, 2);
    assert.sameValue(b, 2);
    assert.sameValue(c, 2);
    assert.sameValue(d, 2);
  })(1, 1);
  assert.sameValue(a, 1);
  assert.sameValue(b, 1);
  assert.sameValue(c, 1);
  assert.sameValue(d, 1);
}
fn(1);