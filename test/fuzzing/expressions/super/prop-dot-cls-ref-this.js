var viaCall;
var viaMember;
class Parent {
  getThis() {
    return this;
  }
  get This() {
    return this;
  }
}
class C extends Parent {
  method() {
    viaCall = super.getThis();
    viaMember = super.This;
  }
}
C.prototype.method();
assert.sameValue(viaCall, C.prototype, 'via CallExpression');
assert.sameValue(viaMember, C.prototype, 'via MemberExpression');