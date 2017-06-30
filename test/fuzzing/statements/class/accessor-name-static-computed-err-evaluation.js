var thrower = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  class C {
    static get [thrower()]() {}
  }
}, '`get` accessor');
assert.throws(Test262Error, function() {
  class C {
    static set [thrower()](_) {}
  }
}, '`set` accessor');