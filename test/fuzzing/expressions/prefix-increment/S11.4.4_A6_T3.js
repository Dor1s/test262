var propKeyEvaluated = false;
var base = {};
var prop = {
  toString: function() {
    assert(!propKeyEvaluated);
    propKeyEvaluated = true;
    return 1;
  }
};
++base[prop];