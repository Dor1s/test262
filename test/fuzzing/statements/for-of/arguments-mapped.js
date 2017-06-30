var i = 0;
(function() {
  for (var value of arguments) {
    assert.sameValue(value, arguments[i], 'argument at index ' + i);
    i++;
  }
}(0, 'a', true, false, null, undefined, NaN));
assert.sameValue(i, 7, 'Visits all arguments');