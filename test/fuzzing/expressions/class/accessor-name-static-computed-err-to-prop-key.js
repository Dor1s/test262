var badKey = Object.create(null);
assert.throws(TypeError, function() {
  0, class {
    static get [badKey]() {}
  };
}, '`get` accessor');
assert.throws(TypeError, function() {
  0, class {
    static set [badKey](_) {}
  };
}, '`set` accessor');