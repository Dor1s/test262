var g = 'outside';
var probeBefore = function() { return g; };
var setBefore = function() { g = null; };
var probeParams, setParams, probeBody, setBody;
var func = function* g(
  _ = (
    probeParams = function() { return g; },
    setParams = function() { g = null; }
    )
  ) {
  probeBody = function() { return g; };
  setBody = function() { g = null; };
};
func().next();
assert.sameValue(probeBefore(), 'outside');
setBefore();
assert.sameValue(probeBefore(), null);
assert.sameValue(probeParams(), func, 'inner binding value (from parameters)');
assert.throws(
  TypeError, setParams, 'inner binding rejects modification (from parameters)'
);
assert.sameValue(
  probeParams(), func, 'inner binding is immutable (from parameters)'
);
assert.sameValue(probeBody(), func, 'inner binding value (from body)');
assert.throws(
  TypeError, setBody, 'inner binding rejects modification (from body)'
);
assert.sameValue(probeBody(), func, 'inner binding is immutable (from body)');