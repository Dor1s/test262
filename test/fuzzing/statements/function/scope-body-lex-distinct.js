function f() {
  let x;
  eval('var x;');
}
assert.throws(SyntaxError, function() {
  f();
});