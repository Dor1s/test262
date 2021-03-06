let o = {a: 2, b: 3, c: 4, e: undefined, f: null, g: false};
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 1);
    assert.sameValue(obj.b, 7);
    assert.sameValue(obj.c, 4);
    assert.sameValue(obj.d, 5);
    assert(obj.hasOwnProperty("e"));
    assert.sameValue(obj.f, null);
    assert.sameValue(obj.g, false);
    assert.sameValue(obj.h, -0);
    assert.sameValue(obj.i.toString(), "Symbol(foo)");
    assert(Object.is(obj.j, o));
    assert.sameValue(Object.keys(obj).length, 10);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...o, a: 1, b: 7, d: 5, h: -0, i: Symbol("foo"), j: o});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);