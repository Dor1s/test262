var initial, postAssignment;
(function() {
  eval('initial = f; f = 5; postAssignment = f; function f() { return 33; }');
}());
assert.sameValue(typeof initial, 'function');
assert.sameValue(initial(), 33);
assert.sameValue(postAssignment, 5, 'binding is mutable');
assert.throws(ReferenceError, function() {
  f;
});