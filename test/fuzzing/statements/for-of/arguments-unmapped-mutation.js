var expected = [1, 4, 6];
var i = 0;
(function() {
  'use strict';
  for (var value of arguments) {
    assert.sameValue(value, expected[i], 'argument at index ' + i);
    i++;
    arguments[i] *= 2;
  }
}(1, 2, 3));
assert.sameValue(i, 3, 'Visits all arguments');