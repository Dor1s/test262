var plain = {};
var custom = {
  toString: function() {
    return '"own" toString';
  }
};
assert.sameValue(`${0} ${plain}`, '0 [object Object]');
assert.sameValue(`${0} ${plain}`, '0 [object Object]');
assert.sameValue(`${0} ${plain}2`, '0 [object Object]2');
assert.sameValue(`${0} ${plain}2`, '0 [object Object]2');
assert.sameValue(`${0} ${custom}`, '0 "own" toString');
assert.sameValue(`${0} ${custom}`, '0 "own" toString');
assert.sameValue(`${0} ${custom}2`, '0 "own" toString2');
assert.sameValue(`${0} ${custom}2`, '0 "own" toString2');