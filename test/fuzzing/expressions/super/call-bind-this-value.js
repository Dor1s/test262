var customThisValue = {};
var boundThisValue;
function Parent() {
  return customThisValue;
}
class Child extends Parent {
  constructor() {
    super();
    boundThisValue = this;
  }
}
new Child();
assert.sameValue(boundThisValue, customThisValue);