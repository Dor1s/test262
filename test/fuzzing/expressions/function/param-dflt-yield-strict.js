throw "Test262: This statement should not be evaluated.";
function *g() {
  0, function(x = yield) {
    paramValue = x;
  };
}