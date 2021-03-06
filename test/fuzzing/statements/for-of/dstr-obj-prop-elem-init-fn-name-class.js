var xCls, cls, xCls2;
var counter = 0;
for ({ x: xCls = class x {}, x: cls = class {}, x: xCls2 = class { static name() {} } } of [{}]) {
  assert.notSameValue(xCls.name, 'xCls');
  assert.notSameValue(xCls2.name, 'xCls2');
  assert.sameValue(cls.name, 'cls');
  verifyNotEnumerable(cls, 'name');
  verifyNotWritable(cls, 'name');
  verifyConfigurable(cls, 'name');
  counter += 1;
}
assert.sameValue(counter, 1);