var initCount = 0;
var callCount = 0;
var f;
f = async function*([[] = function() { initCount += 1; }()] = [[23]]) {
  assert.sameValue(initCount, 0);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);