var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
class C {
  static *method([,]) {}
};
assert.throws(Test262Error, function() {
  C.method(iter);
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');