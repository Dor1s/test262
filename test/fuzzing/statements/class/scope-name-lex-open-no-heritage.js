var probeBefore = function() { return C; };
var setBefore = function() { C = null; };
class C {
  probe() {
    return C;
  }
  modify() {
    C = null;
  }
};
var cls = probeBefore();
assert.sameValue(typeof cls, 'function');
setBefore();
assert.sameValue(probeBefore(), null);
assert.sameValue(cls.prototype.probe(), cls, 'inner binding value');
assert.throws(
  TypeError, cls.prototype.modify, 'inner binding rejects modification'
);
assert.sameValue(
  typeof cls.prototype.probe(), 'function', 'inner binding is immutable'
);