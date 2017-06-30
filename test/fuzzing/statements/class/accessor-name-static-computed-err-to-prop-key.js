var badKey = Object.create(null);
assert.throws(TypeError, function() {
  class C {
    static get [badKey]() {}
  }
}, '`get` accessor');
assert.throws(TypeError, function() {
  class C {
    static set [badKey](_) {}
  }
}, '`set` accessor');