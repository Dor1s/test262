var x = 1;
var probeBefore = function() { return x; };
var probeInside;
try {
  throw null;
} catch (_) {
  var x = 2;
  probeInside = function() { return x; };
}
assert.sameValue(probeBefore(), 2, 'reference preceeding statement');
assert.sameValue(probeInside(), 2, 'reference within statement');
assert.sameValue(x, 2, 'reference following statement');