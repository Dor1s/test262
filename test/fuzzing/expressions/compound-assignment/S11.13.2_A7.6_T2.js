function DummyError() { }
assert.throws(DummyError, function() {
  var base = undefined;
  var prop = function() {
    throw new DummyError();
  };
  var expr = function() {
    $ERROR("right-hand side expression evaluated");
  };
  base[prop()] <<= expr();
});
assert.throws(TypeError, function() {
  var base = undefined;
  var prop = {
    toString: function() {
      $ERROR("property key evaluated");
    }
  };
  var expr = function() {
    $ERROR("right-hand side expression evaluated");
  };
  base[prop] <<= expr();
});