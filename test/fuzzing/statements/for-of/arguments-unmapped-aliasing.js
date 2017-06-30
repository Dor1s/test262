var expected = [1, 2, 3];
var i = 0;
(function(a, b, c) {
  'use strict';
  for (var value of arguments) {
    a = b;
    b = c;
    c = i;
    assert.sameValue(value, expected[i], 'argument at index ' + i);
    i++;
  }
}(1, 2, 3));
assert.sameValue(i, 3, 'Visits all arguments');