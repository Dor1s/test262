var iterCount = 0;
async function *fn() {
  for await (const { cls = class {}, xCls = class X {}, xCls2 = class { static name() {} } } of [{}]) {
    assert.sameValue(cls.name, 'cls');
    assert.notSameValue(xCls.name, 'xCls');
    assert.notSameValue(xCls2.name, 'xCls2');
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);