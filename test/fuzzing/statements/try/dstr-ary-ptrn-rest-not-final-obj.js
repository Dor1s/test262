throw "Test262: This statement should not be evaluated.";
var ranCatch = false;
try {
  throw [1, 2, 3];
} catch ([...{ x }, y]) {
  
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');