var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
assert.throws(Test262Error, function() {
  for (var [,] = iter; iterCount < 1; ) {
    return;
  }
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');