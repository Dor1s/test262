(function(x) {
  try {
    let x = 'middle';
    {
      let x = 'inner';
      throw 0;
    }
  } catch (e) {
    assert.sameValue(x, 'outer');
  }
})('outer');