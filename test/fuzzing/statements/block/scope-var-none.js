var x = 'outside';
var probeBefore = function() { return x; };
var probeInside;
{
  var x = 'inside';
  probeInside = function() { return x; };
}
assert.sameValue(probeBefore(), 'inside', 'reference preceeding statement');
assert.sameValue(probeInside(), 'inside', 'reference within statement');
assert.sameValue(x, 'inside', 'reference following statement');