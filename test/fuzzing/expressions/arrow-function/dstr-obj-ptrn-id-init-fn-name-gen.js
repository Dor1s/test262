var callCount = 0;
var f;
f = ({ gen = function* () {}, xGen = function* x() {} }) => {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  callCount = callCount + 1;
};
f({});
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');