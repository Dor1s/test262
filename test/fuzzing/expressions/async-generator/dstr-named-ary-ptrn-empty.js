var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var f;
f = async function* h([]) {
  assert.sameValue(iterations, 0);
  callCount = callCount + 1;
};
f(iter).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);