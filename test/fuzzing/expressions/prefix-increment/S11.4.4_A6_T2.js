function DummyError() { }
assert.throws(DummyError, function() {
  var base = undefined;
  var prop = function() {
    throw new DummyError();
  };
  ++base[prop()];
});
assert.throws(TypeError, function() {
  var base = undefined;
  var prop = {
    toString: function() {
      $ERROR("property key evaluated");
    }
  };
  ++base[prop];
});