var badKey = Object.create(null);
assert.throws(TypeError, function() {
  0, class {
    get [badKey]() {}
  };
}, '`get` accessor');
assert.throws(TypeError, function() {
  0, class {
    set [badKey](_) {}
  };
}, '`set` accessor');