var callCount = 0;
class C {
  *method([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) {
    assert.sameValue(cls.name, 'cls');
    assert.notSameValue(xCls.name, 'xCls');
    assert.notSameValue(xCls2.name, 'xCls2');
    callCount = callCount + 1;
  }
};
new C().method([]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');