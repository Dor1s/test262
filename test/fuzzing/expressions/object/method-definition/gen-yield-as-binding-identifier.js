throw "Test262: This statement should not be evaluated.";
var obj = {
  *method() {
    var yield;
  }
};