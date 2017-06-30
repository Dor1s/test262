var callCount = 0;
var C = class {
  static async *method({ cls = class {}, xCls = class X {}, xCls2 = class { static name() {} } }) {
    assert.sameValue(cls.name, 'cls');
    assert.notSameValue(xCls.name, 'xCls');
    assert.notSameValue(xCls2.name, 'xCls2');
    callCount = callCount + 1;
  }
};
C.method({}).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);