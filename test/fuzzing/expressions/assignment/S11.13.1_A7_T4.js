var propKeyEvaluated = false;
var base = {};
var prop = {
  toString: function() {
    assert(!propKeyEvaluated);
    propKeyEvaluated = true;
    return "";
  }
};
var expr = function() {
  return 0;
};
base[prop] = expr();