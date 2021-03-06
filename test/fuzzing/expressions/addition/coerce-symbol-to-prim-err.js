var thrower = {};
var counter = {};
var log;
Object.defineProperty(thrower, Symbol.toPrimitive, {
  get: function() {
    log += 'accessThrower';
    return function() { throw new Test262Error(); };
  }
});
Object.defineProperty(counter, Symbol.toPrimitive, {
  get: function() {
    log += 'accessCounter';
    return function() { log += 'callCounter'; };
  }
});
log = '';
assert.throws(Test262Error, function() {
  thrower + counter;
}, 'error thrown by left-hand side');
assert.sameValue(log, 'accessThrower');
log = '';
assert.throws(Test262Error, function() {
  counter + thrower;
}, 'error thrown by right-hand side');
assert.sameValue(log, 'accessCountercallCounteraccessThrower');