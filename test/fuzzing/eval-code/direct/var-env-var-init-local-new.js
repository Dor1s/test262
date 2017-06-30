var initial = null;
var postAssignment;
(function() {
  eval('initial = x; x = 4; postAssignment = x; var x;');
}());
assert.sameValue(initial, undefined);
assert.sameValue(postAssignment, 4, 'binding is mutable');
assert.throws(ReferenceError, function() {
  x;
});