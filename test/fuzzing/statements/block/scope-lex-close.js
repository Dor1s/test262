var probe;
{
  let x = 'inside';
  probe = function() { return x; };
}
let x = 'outside';
assert.sameValue(x, 'outside');
assert.sameValue(probe(), 'inside');