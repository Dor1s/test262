var probeParam, probeBlock;
let x = 'outside';
try {
  throw [];
} catch ([_ = probeParam = function() { return x; }]) {
  probeBlock = function() { return x; };
  let x = 'inside';
}
assert.sameValue(probeParam(), 'outside');
assert.sameValue(probeBlock(), 'inside');