var callCount = 0;
var f;
f = async function* h([gen = function* () {}, xGen = function* x() {}] = []) {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);