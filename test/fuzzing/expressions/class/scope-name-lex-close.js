var C = 'outside';
var cls = class C {
  method() {
    return C;
  }
};
assert.sameValue(cls.prototype.method(), cls, 'from instance method');
assert.sameValue(C, 'outside');