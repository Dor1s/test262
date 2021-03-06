var callCount = 0;
var f;
f = function([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) {
  assert.sameValue(cls.name, 'cls');
  assert.notSameValue(xCls.name, 'xCls');
  assert.notSameValue(xCls2.name, 'xCls2');
  callCount = callCount + 1;
};
f([]);
assert.sameValue(callCount, 1, 'function invoked exactly once');