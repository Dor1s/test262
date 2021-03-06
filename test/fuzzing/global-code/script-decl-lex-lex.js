let test262Let;
const test262Const = null;
class test262Class {}
assert.throws(SyntaxError, function() {
  $262.evalScript('var x; let test262Let;');
}, '`let` binding');
assert.throws(ReferenceError, function() {
  x;
}, 'No bindings created for script containing `let` redeclaration');
assert.throws(SyntaxError, function() {
  $262.evalScript('var x; let test262Const;');
}, '`const` binding');
assert.throws(ReferenceError, function() {
  x;
}, 'No bindings created for script containing `const` redeclaration');
assert.throws(SyntaxError, function() {
  $262.evalScript('var x; let test262Class;');
}, '`class` binding');
assert.throws(ReferenceError, function() {
  x;
}, 'No bindings created for script containing `class` redeclaration');