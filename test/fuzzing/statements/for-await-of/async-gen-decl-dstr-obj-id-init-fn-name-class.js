let xCls, cls, xCls2;
let iterCount = 0;
async function * fn() {
  for await ({ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } } of [{}]) {
    assert.notSameValue(xCls.name, 'xCls');
    assert.notSameValue(xCls2.name, 'xCls2');
    assert.sameValue(cls.name, 'cls');
    verifyNotEnumerable(cls, 'name');
    verifyNotWritable(cls, 'name');
    verifyConfigurable(cls, 'name');
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);