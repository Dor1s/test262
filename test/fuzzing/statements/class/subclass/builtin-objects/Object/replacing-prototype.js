class Obj extends Object {
  valueOf() {
    return 42;
  }
}
var obj = new Obj();
assert.sameValue(obj.valueOf(), 42, 'Replaces prototype');