var args;
var g = function* (x = args = arguments) {
  function arguments() {}
};
g().next();
assert.sameValue(typeof args, 'object');
assert.sameValue(args.length, 0);