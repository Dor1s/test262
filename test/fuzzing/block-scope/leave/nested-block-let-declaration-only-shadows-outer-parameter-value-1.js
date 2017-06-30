(function(x) {
  label: {
    let x = 'inner';
    break label;
  }
  assert.sameValue(x, 'outer');
})('outer');