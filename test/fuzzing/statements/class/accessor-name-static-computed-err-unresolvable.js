assert.throws(ReferenceError, function() {
  class C {
    static get [test262unresolvable]() {}
  }
}, '`get` accessor');
assert.throws(ReferenceError, function() {
  class C {
    static set [test262unresolvable](_) {}
  }
}, '`set` accessor');