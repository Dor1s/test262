(function(x) {
  try {
    let x = 'middle';
    {
      let x = 'inner';
      throw 0;
    }
  } catch(e) {
  } finally {
    assert.sameValue(x, 'outer');
  }
})('outer');