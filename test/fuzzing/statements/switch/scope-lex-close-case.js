let x = 'outside';
var probe1, probe2;
switch (null) {
  case null:
    let x = 'inside';
    probe1 = function() { return x; };
  case null:
    probe2 = function() { return x; };
}
assert.sameValue(probe1(), 'inside', 'from first `case` clause');
assert.sameValue(probe2(), 'inside', 'from second `case` clause');
assert.sameValue(x, 'outside');