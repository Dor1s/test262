assert.throws(ReferenceError, function() {
  class C {
    get [test262unresolvable]() {}
  }
}, '`get` accessor');
assert.throws(ReferenceError, function() {
  class C {
    set [test262unresolvable](_) {}
  }
}, '`set` accessor');