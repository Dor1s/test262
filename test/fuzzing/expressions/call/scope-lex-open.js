var n = 'outside';
var probeBefore = function() { return n; };
var probeInside;
var func = function n() {
  let n = 'inside';
  probeInside = function() { return n; };
};
func();
assert.sameValue(probeBefore(), 'outside');
assert.sameValue(probeInside(), 'inside');