var callCount = 0;
class C {
  async *method(_ = (function() { throw new Test262Error(); }())) {
    
    callCount = callCount + 1;
  }
}
assert.throws(Test262Error, function() {
  C.prototype.method();
});
assert.sameValue(callCount, 0, 'method body not evaluated');