var actualStrict;
var actualNonStrict;
let x = 'outside';
{
  let x = 'inside';
  actualNonStrict = (0,eval)('x;');
  actualStrict = (0,eval)('"use strict"; x;');
}
assert.sameValue(actualNonStrict, 'outside', 'non strict mode');
assert.sameValue(actualStrict, 'outside', 'strict mode');