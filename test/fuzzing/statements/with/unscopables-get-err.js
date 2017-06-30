var env = { x: 86 };
Object.defineProperty(env, Symbol.unscopables, {
  get: function() {
    throw new Test262Error();
  }
});
with (env) {
  assert.throws(Test262Error, function() {
    x;
  });
}