assert.throws(ReferenceError, function() {
  0, class {
    static get [test262unresolvable]() {}
  };
}, '`get` accessor');
assert.throws(ReferenceError, function() {
  0, class {
    static set [test262unresolvable](_) {}
  };
}, '`set` accessor');