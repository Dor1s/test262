throw "Test262: This statement should not be evaluated.";
function* g() {
  for (yield * '' in {}; ; ) ;
}