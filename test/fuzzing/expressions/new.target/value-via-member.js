var newTarget = null;
var obj = {
  get m() {
    newTarget = new.target;
  }
};
obj.m;
assert.sameValue(newTarget, undefined);