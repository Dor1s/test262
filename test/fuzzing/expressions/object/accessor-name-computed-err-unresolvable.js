assert.throws(ReferenceError, function() {
  ({
    get [test262unresolvable]() {}
  });
}, '`get` accessor');
assert.throws(ReferenceError, function() {
  ({
    set [test262unresolvable](_) {}
  });
}, '`set` accessor');