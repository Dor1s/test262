var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
class C {
  static async *method([,] = iter) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method();
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');