var env = { x: 86 };
env[Symbol.unscopables] = {};
Object.defineProperty(env[Symbol.unscopables], 'x', {
  get: function() {
    throw new Test262Error();
  }
});
with (env) {
  assert.throws(Test262Error, function() {
    x;
  });
}