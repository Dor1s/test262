var thrower = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  0, class {
    static get [thrower()]() {}
  };
}, '`get` accessor');
assert.throws(Test262Error, function() {
  0, class {
    static set [thrower()](_) {}
  };
}, '`set` accessor');