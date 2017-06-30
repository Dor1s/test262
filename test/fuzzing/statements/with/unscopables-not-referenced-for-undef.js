var x = 0;
var env = {};
var callCount = 0;
Object.defineProperty(env, Symbol.unscopables, {
  get: function() {
    callCount += 1;
  }
});
with (env) {
  x;
}
assert.sameValue(callCount, 0);