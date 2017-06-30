(function(x) {
  try {
    let x = 'inner';
    throw 0;
  } catch (e) {
    assert.sameValue(x, 'outer');
  }
})('outer');