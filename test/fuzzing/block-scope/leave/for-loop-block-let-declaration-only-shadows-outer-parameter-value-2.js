(function(x) {
  label: for (var i = 0; i < 10; ++i) {
    let x = 'middle' + i;
    for (var j = 0; j < 10; ++j) {
      let x = 'inner' + j;
      continue label;
    }
  }
  assert.sameValue(x, 'outer');
})('outer');