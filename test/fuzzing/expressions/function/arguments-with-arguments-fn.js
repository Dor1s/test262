var args;
var f = function(x = args = arguments) {
  function arguments() {}
};
f();
assert.sameValue(typeof args, 'object');
assert.sameValue(args.length, 0);