function thrower() {
  throw new Test262Error();
}
var obj = {
  async *method({ [thrower()]: x }) {
    
  }
};
assert.throws(Test262Error, function() {
  obj.method({});
});