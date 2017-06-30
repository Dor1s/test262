var thrower = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  ({
    get [thrower()]() {}
  });
}, '`get` accessor');
assert.throws(Test262Error, function() {
  ({
    set [thrower()](_) {}
  });
}, '`set` accessor');