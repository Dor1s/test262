var actualStrict;
var actualNonStrict;
let x = 'outside';
{
  let x = 'inside';
  actualNonStrict = eval('x;');
  actualStrict = eval('"use strict"; x;');
}
assert.sameValue(actualNonStrict, 'inside', 'non strict mode');
assert.sameValue(actualStrict, 'inside', 'strict mode');