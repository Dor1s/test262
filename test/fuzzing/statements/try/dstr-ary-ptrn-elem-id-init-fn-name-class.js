var ranCatch = false;
try {
  throw [];
} catch ([cls = class {}, xCls = class X {}, xCls2 = class { static name() {} }]) {
  assert.sameValue(cls.name, 'cls');
  assert.notSameValue(xCls.name, 'xCls');
  assert.notSameValue(xCls2.name, 'xCls2');
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');