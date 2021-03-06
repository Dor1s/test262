var iterable = {};
iterable[Symbol.iterator] = function() {
  var j = 0;
  return {
    next: function() {
      j = j + 2;
      return { value: j, done: j === 8 };
    }
  }
};
var expected = [2, 4, 6];
var i = 0;
for (var x of iterable) {
  assert.sameValue(x, expected[i]);
  i++;
}
assert.sameValue(i, 3);