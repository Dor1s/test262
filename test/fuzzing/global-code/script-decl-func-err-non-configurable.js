Object.defineProperty(
  this,
  'data1',
  { configurable: false, value: 0, writable: true, enumerable: false }
);
Object.defineProperty(
  this,
  'data2',
  { configurable: false, value: 0, writable: false, enumerable: true }
);
Object.defineProperty(
  this,
  'data3',
  { configurable: false, value: 0, writable: false, enumerable: false }
);
Object.defineProperty(
  this,
  'accessor1',
  { 
    configurable: false,
    get: function() {},
    set: function() {},
    enumerable: true
  }
);
Object.defineProperty(
  this,
  'accessor2',
  { 
    configurable: false,
    get: function() {},
    set: function() {},
    enumerable: true
  }
);
assert.throws(TypeError, function() {
  $262.evalScript('var x; function data1() {}');
}, 'writable, non-enumerable data property');
assert.throws(ReferenceError, function() {
  x;
}, 'bindings not created for writable, non-enumerable data property');
assert.throws(TypeError, function() {
  $262.evalScript('var x; function data2() {}');
}, 'non-writable, enumerable data property');
assert.throws(ReferenceError, function() {
  x;
}, 'bindings not created for non-writable, enumerable data property');
assert.throws(TypeError, function() {
  $262.evalScript('var x; function data3() {}');
}, 'non-writable, non-enumerable data property');
assert.throws(ReferenceError, function() {
  x;
}, 'bindings not created for non-writable, non-enumerable data property');
assert.throws(TypeError, function() {
  $262.evalScript('var x; function accessor1() {}');
}, 'enumerable accessor property');
assert.throws(ReferenceError, function() {
  x;
}, 'bindings not created for enumerableaccessor property');
assert.throws(TypeError, function() {
  $262.evalScript('var x; function accessor2() {}');
}, 'non-enumerable accessor property');
assert.throws(ReferenceError, function() {
  x;
}, 'bindings not created for non-enumerableaccessor property');