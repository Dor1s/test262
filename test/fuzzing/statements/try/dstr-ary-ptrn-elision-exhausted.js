var iter = function*() {}();
iter.next();
var ranCatch = false;
try {
  throw iter;
} catch ([,]) {
  
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');