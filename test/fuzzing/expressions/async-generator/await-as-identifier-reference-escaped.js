throw "Test262: This statement should not be evaluated.";
var gen = async function *() {
  void \u0061wait;
};