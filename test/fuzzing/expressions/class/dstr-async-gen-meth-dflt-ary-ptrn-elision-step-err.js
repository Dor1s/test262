var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
var C = class {
  async *method([,] = iter) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method();
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');