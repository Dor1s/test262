class Fn extends Function {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new Fn();
});
class Fn2 extends Function {
  constructor() {
    super();
  }
}
var fn = new Fn2();
assert(fn instanceof Function);