var thrower = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  class C {
    get [thrower()]() {}
  }
}, '`get` accessor');
assert.throws(Test262Error, function() {
  class C {
    set [thrower()](_) {}
  }
}, '`set` accessor');