class C {
  method() {
    return C;
  }
}
var cls = C;
assert.sameValue(typeof C, 'function');
C = null;
assert.sameValue(C, null);
assert.sameValue(cls.prototype.method(), cls, 'from instance method');