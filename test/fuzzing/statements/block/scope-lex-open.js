let x = 'outside';
var probeBefore = function() { return x; };
var probeInside;
{
  let x = 'inside';
  probeInside = function() { return x; };
}
assert.sameValue(probeBefore(), 'outside');
assert.sameValue(probeInside(), 'inside');