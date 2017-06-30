var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
class GFn1 extends GeneratorFunction {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new GFn1();
});
class GFn2 extends GeneratorFunction {
  constructor() {
    super();
  }
}
var fn = new GFn2();
assert(fn instanceof GeneratorFunction);