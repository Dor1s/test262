var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
var C = class {
  static *method([,] = iter) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');