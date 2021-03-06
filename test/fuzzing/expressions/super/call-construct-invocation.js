var expectedNewTarget = function() {};
var thisValue, instance, args, actualNewTarget;
function Parent() {
  thisValue = this;
  args = arguments;
  actualNewTarget = new.target;
}
class Child extends Parent {
  constructor() {
    super(1, 2, 3);
  }
}
instance = Reflect.construct(Child, [4, 5, 6], expectedNewTarget);
assert.sameValue(thisValue, instance);
assert.sameValue(args.length, 3, 'length of provided arguments object');
assert.sameValue(args[0], 1, 'first argument');
assert.sameValue(args[1], 2, 'second argument');
assert.sameValue(args[2], 3, 'third argument');
assert.sameValue(actualNewTarget, expectedNewTarget, 'new.target value');