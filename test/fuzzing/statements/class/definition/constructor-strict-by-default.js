class C {
  constructor() {
    assert.throws(ReferenceError, function() {
      nonExistingBinding = 42;
    });
  }
}
new C();