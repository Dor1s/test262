var following = 0;
var iter =function* () {
  throw new Test262Error();
  following += 1;
}();
class C {
  async *method([,]) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method(iter);
});
iter.next();
assert.sameValue(following, 0, 'Iterator was properly closed.');