var newTarget = null;
function f() {
  newTarget = new.target;
}
new f;
assert.sameValue(newTarget, f, 'Invoked without Arguments');
newTarget = null;
new f();
assert.sameValue(newTarget, f, 'Invoked with Arguments');