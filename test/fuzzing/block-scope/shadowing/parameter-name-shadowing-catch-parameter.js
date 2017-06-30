function fn() {
  var c = 1;
  try {
    throw 'stuff3';
  } catch (c) {
    (function(c) {
      // parameter name shadowing catch parameter
      c = 3;
      assert.sameValue(c, 3);
    })();
    assert.sameValue(c, 'stuff3');
  }
  assert.sameValue(c, 1);
}
fn();