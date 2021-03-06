var left = {};
var right = {};
var log = '';
var leftThisVal, rightThisVal, leftArgs, rightArgs;
left[Symbol.toPrimitive] = function() {
  log += 'left';
  leftThisVal = this;
  leftArgs = arguments;
};
right[Symbol.toPrimitive] = function() {
  log += 'right';
  rightThisVal = this;
  rightArgs = arguments;
};
left + right;
assert.sameValue(log, 'leftright', 'methods invoked in correct sequence');
assert.sameValue(leftThisVal, left, 'left-hand side `this` value');
assert.sameValue(leftArgs.length, 1, 'left-hand side argument length');
assert.sameValue(leftArgs[0], 'default', 'left-hand side argument value');
assert.sameValue(rightThisVal, right, 'right-hand side `this` value');
assert.sameValue(rightArgs.length, 1, 'right-hand side argument length');
assert.sameValue(rightArgs[0], 'default', 'right-hand side argument value');