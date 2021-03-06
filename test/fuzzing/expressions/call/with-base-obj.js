var viaMember, viaCall;
var obj = {
  method: function() {
    viaCall = this;
  },
  get attribute() {
    viaMember = this;
  }
};
with (obj) {
  method();
  attribute;
}
assert.sameValue(viaCall, obj, 'via CallExpression');
assert.sameValue(viaMember, obj, 'via MemberExpression');