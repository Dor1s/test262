var initial = null;
var postDeletion;
(function() {
  eval('initial = x; delete x; postDeletion = function() { x; }; var x;');
}());
assert.sameValue(initial, undefined);
assert.throws(ReferenceError, postDeletion);