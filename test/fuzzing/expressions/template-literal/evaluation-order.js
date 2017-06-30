var tag = function(templateObject, a, b, c) {
  callCount++;
  assert.sameValue(a, 0);
  assert.sameValue(b, 1);
  assert.sameValue(c, 2);
};
var i = 0;
var callCount;
assert.sameValue(`a${ i++ }b${ i++ }c${ i++ }d`, 'a0b1c2d');
i = 0;
callCount = 0;
tag`a${ i++ }b${ i++ }c${ i++ }d`;
assert.sameValue(callCount, 1);