var args, that;
class Base {
  constructor() {
    that = this;
    args = arguments;
  }
}
class Derived extends Base {}
new Derived;
assert.sameValue(args.length, 0, "The value of `args.length` is `0`");
new Derived(0, 1, 2);
assert.sameValue(args.length, 3, "The value of `args.length` is `3`");
assert.sameValue(
  that instanceof Derived,
  true,
  "The result of `that instanceof Derived` is `true`"
);
var arr = new Array(100);
var obj = {};
assert.throws(TypeError, function() {Derived.apply(obj, arr);});