throw "Test262: This statement should not be evaluated.";
function *g() {
  function f(x = yield) {
    paramValue = x;
  }
}