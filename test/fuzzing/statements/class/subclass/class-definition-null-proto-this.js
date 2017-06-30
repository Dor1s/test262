class C extends null {
  constructor() {
    // Use an arrow function to access the `this` binding of the class constructor.
    assert.throws(ReferenceError, () => {
      this;
    });
  }
}
assert.throws(ReferenceError, function() {
  new C();
});