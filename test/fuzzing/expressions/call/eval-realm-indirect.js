var x = 'outside';
var result;
(function() {
  var eval = $262.createRealm().global.eval;
  eval('var x = "inside";');
  result = x;
}());
assert.sameValue(result, 'outside');