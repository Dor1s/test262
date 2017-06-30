var initial, postDeletion;
(function() {
  eval('initial = f; delete f; postDeletion = function() { f; }; function f() { return 33; }');
}());
assert.sameValue(typeof initial, 'function');
assert.sameValue(initial(), 33);
assert.throws(ReferenceError, postDeletion, 'binding may be deleted');