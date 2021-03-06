Object.preventExtensions(this);
$262.evalScript('let test262let = 1;');
test262let = 2;
assert.sameValue(test262let, 2, '`let` binding is mutable');
assert.sameValue(
  this.hasOwnProperty('test262let'),
  false,
  'property not created on the global object (let)'
);
$262.evalScript('const test262const = 3;');
assert.throws(TypeError, function() {
  test262const = 4;
}, '`const` binding is strictly immutable');
assert.sameValue(test262const, 3, '`const` binding cannot be modified');
assert.sameValue(
  this.hasOwnProperty('test262const'),
  false,
  'property not created on the global object (const)'
);
$262.evalScript('class test262class {}');
test262class = 5;
assert.sameValue(test262class, 5, '`class` binding is mutable');
assert.sameValue(
  this.hasOwnProperty('test262class'),
  false,
  'property not created on the global object (class)'
);