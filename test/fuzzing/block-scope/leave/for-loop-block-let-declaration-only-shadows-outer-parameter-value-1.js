(function(x) {
  for (var i = 0; i < 10; ++i) {
    let x = 'inner' + i;
    continue;
  }
  assert.sameValue(x, 'outer');
})('outer');