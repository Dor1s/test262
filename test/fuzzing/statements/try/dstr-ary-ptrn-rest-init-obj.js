throw "Test262: This statement should not be evaluated.";
var ranCatch = false;
try {
  throw [];
} catch ([...{ x } = []]) {
  
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');