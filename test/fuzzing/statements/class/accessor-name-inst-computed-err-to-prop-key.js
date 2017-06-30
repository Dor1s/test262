var badKey = Object.create(null);
assert.throws(TypeError, function() {
  class C {
    get [badKey]() {}
  }
}, '`get` accessor');
assert.throws(TypeError, function() {
  class C {
    set [badKey](_) {}
  }
}, '`set` accessor');