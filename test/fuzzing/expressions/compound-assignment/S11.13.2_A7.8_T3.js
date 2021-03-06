function DummyError() { }
assert.throws(DummyError, function() {
  var base = {};
  var prop = {
    toString: function() {
      throw new DummyError();
    }
  };
  var expr = function() {
    $ERROR("right-hand side expression evaluated");
  };
  base[prop] >>>= expr();
});