throw "Test262: This statement should not be evaluated.";
var fn = async function fn() {
  void await;
};