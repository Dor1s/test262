function thrower() {
  throw new Test262Error();
}
var C = class {
  static async *method({ [thrower()]: x }) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method({});
});