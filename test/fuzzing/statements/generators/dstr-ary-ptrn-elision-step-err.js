var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
function* f([,]) {}
assert.throws(Test262Error, function() {
  f(iter);
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');