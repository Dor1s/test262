var initCount = 0;
var iterCount = 0;
var iter = function*() { iterCount += 1; }();
var callCount = 0;
var f;
f = async function*([[] = function() { initCount += 1; return iter; }()]) {
  assert.sameValue(initCount, 1);
  assert.sameValue(iterCount, 0);
  callCount = callCount + 1;
};
f([]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);