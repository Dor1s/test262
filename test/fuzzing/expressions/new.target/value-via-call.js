var newTarget = null;
function f() {
  newTarget = new.target;
}
f();
assert.sameValue(newTarget, undefined);