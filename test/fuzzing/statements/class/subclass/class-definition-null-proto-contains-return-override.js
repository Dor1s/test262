var obj;
class Foo extends null {
  constructor() {
    return obj = {};
  }
}
var f = new Foo();
assert.sameValue(f, obj);
assert.sameValue(Object.getPrototypeOf(f), Object.prototype);