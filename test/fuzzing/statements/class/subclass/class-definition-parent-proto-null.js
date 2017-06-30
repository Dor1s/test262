var invoked = false;
var instance, savedArg;
function A(arg) {
  invoked = true;
  savedArg = arg;
  this.prop = 0;
}
A.prototype = null;
class C extends A {}
instance = new C(1);
assert.sameValue(invoked, true);
assert.sameValue(savedArg, 1);
assert.sameValue(instance.prop, 0);