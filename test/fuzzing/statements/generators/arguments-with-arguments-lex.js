var args;
function* g(x = args = arguments) {
  let arguments;
}
g().next();
assert.sameValue(typeof args, 'object');
assert.sameValue(args.length, 0);