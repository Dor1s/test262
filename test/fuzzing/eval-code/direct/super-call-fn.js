var executed = false;
function f() {
  eval('executed = true; super();');
}
assert.throws(SyntaxError, function() {
  f();
});
assert.sameValue(executed, false);