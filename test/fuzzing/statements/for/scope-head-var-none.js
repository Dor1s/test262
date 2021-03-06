var probeBefore = function() { return x; };
var probeTest, probeIncr, probeBody;
var run = true;
for (
    var _ = eval('var x = 1;');
    run && (probeTest = function() { return x; });
    probeIncr = function() { return x; }
  )
  probeBody = function() { return x; }, run = false;
var x = 2;
assert.sameValue(probeBefore(), 2, 'reference preceeding statement');
assert.sameValue(probeTest(), 2, 'reference from "test" position');
assert.sameValue(probeBody(), 2, 'reference from statement body');
assert.sameValue(probeIncr(), 2, 'reference from "increment" position');
assert.sameValue(x, 2, 'reference following statement');