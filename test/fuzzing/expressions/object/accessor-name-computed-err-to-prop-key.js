var badKey = Object.create(null);
assert.throws(TypeError, function() {
  ({
    get [badKey]() {}
  });
}, '`get` accessor');
assert.throws(TypeError, function() {
  ({
    set [badKey](_) {}
  });
}, '`set` accessor');