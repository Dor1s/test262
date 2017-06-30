var f = 'outside';
var probeBefore = function() { return f; };
var setBefore = function() { f = null; };
var probeParams, setParams, probeBody, setBody;
var func = function f(
  _ = (
    probeParams = function() { return f; },
    setParams = function() { f = null; }
    )
  ) {
  probeBody = function() { return f; };
  setBody = function() { f = null; };
};
func();
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