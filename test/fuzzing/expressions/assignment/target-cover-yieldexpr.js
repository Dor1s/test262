throw "Test262: This statement should not be evaluated.";
function* g() {
  (yield) = 1;
}