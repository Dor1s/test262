function f() {}
(function(x) {
  label: {
    let x = 'inner';
    break label;
  }
  f();  // The context could be restored from the stack after the call.
  assert.sameValue(x, 'outer');
})('outer');