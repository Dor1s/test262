function f() {}
(function(x) {
  for (var i = 0; i < 10; ++i) {
    let x = 'inner';
    continue;
  }
  f();
  assert.sameValue(x, 'outer');
})('outer');