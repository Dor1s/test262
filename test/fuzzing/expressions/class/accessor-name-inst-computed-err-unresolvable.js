assert.throws(ReferenceError, function() {
  0, class {
    get [test262unresolvable]() {}
  };
}, '`get` accessor');
assert.throws(ReferenceError, function() {
  0, class {
    set [test262unresolvable](_) {}
  };
}, '`set` accessor');