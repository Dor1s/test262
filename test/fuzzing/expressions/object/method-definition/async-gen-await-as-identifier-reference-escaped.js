throw "Test262: This statement should not be evaluated.";
var obj = {
  async *method() {
    void \u0061wait;
  }
};