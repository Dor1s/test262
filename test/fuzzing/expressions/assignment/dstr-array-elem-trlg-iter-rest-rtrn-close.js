var nextCount = 0;
var returnCount = 0;
var unreachable = 0;
var thisValue = null;
var args = null;
var iterable = {};
var x;
var iterator = {
  next: function() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
  return: function() {
    returnCount += 1;
    thisValue = this;
    args = arguments;
    return {};
  }
};
var iter, result;
iterable[Symbol.iterator] = function() {
  return iterator;
};
function* g() {
var result;
var vals = iterable;
result = [ x , ...{}[yield] ] = vals;
unreachable += 1;
assert.sameValue(result, vals);
}
iter = g();
iter.next();
result = iter.return(999);
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 1);
assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
assert.sameValue(result.value, 999);
assert(result.done, 'Iterator correctly closed');
assert.sameValue(thisValue, iterator, 'correct `this` value');
assert(!!args, 'arguments object provided');
assert.sameValue(args.length, 0, 'zero arguments specified');