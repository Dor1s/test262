var probeBefore = function() { return C; };
var C = 'outside';
var cls = class C {
  probe() {
    return C;
  }
  modify() {
    C = null;
  }
};
assert.sameValue(probeBefore(), 'outside');
assert.sameValue(cls.prototype.probe(), cls, 'inner binding value');
assert.throws(
  TypeError, cls.prototype.modify, 'inner binding rejects modification'
);
assert.sameValue(cls.prototype.probe(), cls, 'inner binding is immutable');