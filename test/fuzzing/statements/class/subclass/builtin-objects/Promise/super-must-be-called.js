class Prom1 extends Promise {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new Prom1();
});
class Prom2 extends Promise {
  constructor(exec) {
    super(exec);
  }
}
new Prom2(function() {});