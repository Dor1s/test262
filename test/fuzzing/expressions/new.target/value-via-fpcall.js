var newTarget = null;
function f() {
  newTarget = new.target;
}
f.call({});
assert.sameValue(newTarget, undefined);