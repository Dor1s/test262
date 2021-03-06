var unreachable = 0;
var reachable = 0;
class C extends null {
  constructor() {
    reachable += 1;
    super(unreachable += 1);
    unreachable += 1;
  }
}
assert.throws(TypeError, function() {
  new C();
});
assert.sameValue(reachable, 1);
assert.sameValue(unreachable, 0);