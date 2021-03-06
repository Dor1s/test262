var probeBefore = function() { return [x, y, z]; };
var probeTest, probeIncr, probeBody;
var run = true;
for (
    ;
    run && (eval('var x = 1;'), probeTest = function() { return [x, y, z]; });
    eval('var y = 1;'), probeIncr = function() { return [x, y, z]; }
  )
  var z = 1, _ = (probeBody = function() { return [x, y, z]; }), run = false;
var x = 2;
var y = 2;
var z = 2;
assert.sameValue(
  probeBefore()[0],
  2,
  'reference preceeding statement (redeclared in "test" position)'
);
assert.sameValue(
  probeBefore()[1],
  2,
  'reference preceeding statement (redeclared in statement body)'
);
assert.sameValue(
  probeBefore()[2],
  2,
  'reference preceeding statement (redeclared in "increment" position)'
);
assert.sameValue(
  probeTest()[0],
  2,
  'reference from "test" position (redeclared in "test" position)'
);
assert.sameValue(
  probeTest()[1],
  2,
  'reference from "test" position (redeclared in statement body)'
);
assert.sameValue(
  probeTest()[2],
  2,
  'reference from "test" position (redeclared in "increment" position)'
);
assert.sameValue(
  probeBody()[0],
  2,
  'reference from statement body (redeclared in "test" position)'
);
assert.sameValue(
  probeBody()[1],
  2,
  'reference from statement body (redeclared in statement body)'
);
assert.sameValue(
  probeBody()[2],
  2,
  'reference from statement body (redeclared in "increment" position)'
);
assert.sameValue(
  probeIncr()[0],
  2,
  'reference from "increment" position (redeclared in "test" position)'
);
assert.sameValue(
  probeIncr()[1],
  2,
  'reference from "increment" position (redeclared in statement body)'
);
assert.sameValue(
  probeIncr()[2],
  2,
  'reference from "increment" position (redeclared in "increment" position)'
);