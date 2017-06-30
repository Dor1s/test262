var iter = function*() {}();
iter.next();
var callCount = 0;
var C = class {
  *method([,]) {
    
    callCount = callCount + 1;
  }
};
new C().method(iter).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');