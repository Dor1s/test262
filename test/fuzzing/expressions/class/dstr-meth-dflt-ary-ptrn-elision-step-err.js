var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
var C = class {
  method([,] = iter) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');