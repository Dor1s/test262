let symbol = Symbol('foo');
let o = {};
o[symbol] = 1;
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj[symbol], 1);
    assert(Object.hasOwnProperty.call(obj, symbol));
    assert.sameValue(obj.c, 4);
    assert.sameValue(obj.d, 5);
    assert.sameValue(Object.keys(obj).length, 2);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...o, c: 4, d: 5});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);