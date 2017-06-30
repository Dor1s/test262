var yield = 23;
var paramValue;
function *g() {
  (function(x = yield) {
    paramValue = x;
  }());
}
g().next();
assert.sameValue(paramValue, 23);