var iter = function*() {}();
iter.next();
var callCount = 0;
async function* f([,] = iter) {
  
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);