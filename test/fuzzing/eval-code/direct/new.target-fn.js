var newTarget = null;
var getNewTarget = function() {
  newTarget = eval('new.target;');
};
getNewTarget();
assert.sameValue(newTarget, undefined);
new getNewTarget();
assert.sameValue(newTarget, getNewTarget);