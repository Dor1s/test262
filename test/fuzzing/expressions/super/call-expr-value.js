var customThisValue = {};
var value;
function Parent() {
  return customThisValue;
}
class Child extends Parent {
  constructor() {
    value = super();
  }
}
new Child();
assert.sameValue(value, customThisValue);