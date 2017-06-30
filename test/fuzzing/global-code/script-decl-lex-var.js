var test262Var;
function test262Fn() {}
assert.throws(SyntaxError, function() {
  $262.evalScript('var x; let test262Var;');
}, 'variable');
assert.throws(ReferenceError, function() {
  x;
}, 'no bindings created (script shadowing variable)');
assert.throws(SyntaxError, function() {
  $262.evalScript('var x; let test262Fn;');
}, 'function');
assert.throws(ReferenceError, function() {
  x;
}, 'no bindings created (script shadowing function)');