(function(x) {
  label: {
    let x = 'middle';
    {
      let x = 'inner';
      break label;
    }
  }
  assert.sameValue(x, 'outer');
})('outer');