var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
class C {
  method([,]) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method(iter);
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');