var iterCount = 0;
for (var [cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }] of [[]]) {
  assert.sameValue(cls.name, 'cls');
  assert.notSameValue(xCls.name, 'xCls');
  assert.notSameValue(xCls2.name, 'xCls2');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');