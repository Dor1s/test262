var x = 0;
var callCount = 0;
class C {
  static async *method(x = x) {
    
    callCount = callCount + 1;
  }
}
assert.throws(ReferenceError, function() {
  C.method();
});
assert.sameValue(callCount, 0, 'method body not evaluated');