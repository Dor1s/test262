class Sub extends Array {
  constructor(a, b) {
    super(a, b);
  }
}
var sub = new Sub(42, 'foo');
assert(compareArray(sub, [42, 'foo']));