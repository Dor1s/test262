throw "Test262: This statement should not be evaluated.";
() => {
  new.target;
};