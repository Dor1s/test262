var newTarget = null;
function f() {
  newTarget = new.target;
}
f.apply({});
assert.sameValue(newTarget, undefined);