var iterCount = 0;
async function *fn() {
  for await (const [gen = function* () {}, xGen = function* x() {}] of [[]]) {
    assert.sameValue(gen.name, 'gen');
    assert.notSameValue(xGen.name, 'xGen');
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);