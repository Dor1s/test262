var yield = 23;
var paramValue;
function *g() {
  function f(x = yield) {
    paramValue = x;
  }
  f();
}
g().next();
assert.sameValue(paramValue, 23);