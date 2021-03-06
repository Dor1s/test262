var viaCall;
var viaMember;
var parent = {
  getThis: function() {
    return this;
  },
  get This() {
    return this;
  }
};
var obj = {
  method() {
    viaCall = super['getThis']();
    viaMember = super['This'];
  }
};
Object.setPrototypeOf(obj, parent);
obj.method();
assert.sameValue(viaCall, obj, 'via CallExpression');
assert.sameValue(viaMember, obj, 'via MemberExpression');