var returnCount = 0;
var unreachable = 0;
var thisValue = null;
var args = null;
var iterable = {};
var iterator = {
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
var counter = 0;
for ([ {}[yield] ] of [iterable]) {
  unreachable += 1;
  counter += 1;
}
assert.sameValue(counter, 1);
}
iter = g();
iter.next();
result = iter.return(777);
assert.sameValue(returnCount, 1);
assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
assert.sameValue(result.value, 777);
assert(result.done, 'Iterator correctly closed');
assert.sameValue(thisValue, iterator, 'correct `this` value');
assert(!!args, 'arguments object provided');
assert.sameValue(args.length, 0, 'zero arguments specified');