var args;
function f(x = args = arguments) {
  let arguments;
}
f();
assert.sameValue(typeof args, 'object');
assert.sameValue(args.length, 0);