function f() {}
(function(x) {
  try {
    let x = 'inner';
    throw 0;
  } catch(e) {
  } finally {
    f();
    assert.sameValue(x, 'outer');
  }
})('outer');