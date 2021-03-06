var calls = [];
var o = { get z() { calls.push('z') }, get a() { calls.push('a') } };
Object.defineProperty(o, 1, { get: () => { calls.push(1) }, enumerable: true });
Object.defineProperty(o, Symbol('foo'), { get: () => { calls.push("Symbol(foo)") }, enumerable: true });
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert(compareArray(calls, [1, 'z', 'a', "Symbol(foo)"]));
    assert.sameValue(Object.keys(obj).length, 3);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...o});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);