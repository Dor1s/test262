var callCount = 0;
class C {
  static method({ cls = class {}, xCls = class X {}, xCls2 = class { static name() {} } }) {
    assert.sameValue(cls.name, 'cls');
    assert.notSameValue(xCls.name, 'xCls');
    assert.notSameValue(xCls2.name, 'xCls2');
    callCount = callCount + 1;
  }
};
C.method({});
assert.sameValue(callCount, 1, 'method invoked exactly once');