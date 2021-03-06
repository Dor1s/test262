var setBefore = function() { C = null; };
var probeBefore = function() { return C; };
var probeHeritage, setHeritage;
class C extends (
    probeHeritage = function() { return C; },
    setHeritage = function() { C = null; }
  ) {
  method() {
    return C;
  }
};
var cls = probeBefore();
assert.sameValue(typeof cls, 'function');
setBefore();
assert.sameValue(probeBefore(), null);
assert.sameValue(probeHeritage(), cls, 'inner binding is independent');
assert.throws(
  TypeError, setHeritage, 'inner binding rejects modification'
);
assert.sameValue(
  typeof probeHeritage(), 'function', 'inner binding is immutable'
);
assert.sameValue(
  typeof cls.prototype.method(), 'function', 'from instance method'
);