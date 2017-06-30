var probeBefore = function() { return C; };
var probeHeritage, setHeritage;
var C = 'outside';
var cls = class C extends (
    probeHeritage = function() { return C; },
    setHeritage = function() { C = null; }
  ) {
  method() {
    return C;
  }
};
assert.sameValue(probeBefore(), 'outside');
assert.sameValue(probeHeritage(), cls, 'from class heritage');
assert.throws(TypeError, setHeritage, 'inner binding rejects modification');
assert.sameValue(probeHeritage(), cls, 'inner binding is immutable');
assert.sameValue(cls.prototype.method(), cls, 'from instance method');