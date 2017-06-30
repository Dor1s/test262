var plain = {};
var custom = {
  toString: function() {
    return '"own" toString';
  }
};
assert.sameValue(`${0} ${1} ${plain}`, '0 1 [object Object]');
assert.sameValue(`${0} ${1} ${plain}`, '0 1 [object Object]');
assert.sameValue(`${0} ${1} ${plain}2`, '0 1 [object Object]2');
assert.sameValue(`${0} ${1} ${plain}2`, '0 1 [object Object]2');
assert.sameValue(`${0} ${1} ${custom}`, '0 1 "own" toString');
assert.sameValue(`${0} ${1} ${custom}`, '0 1 "own" toString');
assert.sameValue(`${0} ${1} ${custom}2`, '0 1 "own" toString2');
assert.sameValue(`${0} ${1} ${custom}2`, '0 1 "own" toString2');