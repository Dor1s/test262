let returnCount = 0;
let unreachable = 0;
let thisValue = null;
let args = null;
let iterator = {
  return() {
    returnCount += 1;
    thisValue = this;
    args = arguments;
    return {};
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
let iterCount = 0;
async function * fn() {
  for await ([ {}[yield] , ] of [iterable]) {
    unreachable += 1;
    iterCount += 1;
  }
}
let iter = fn();
iter.return(888).then(result => {
  assert.sameValue(returnCount, 1);
  assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
  assert.sameValue(result.value, 888);
  assert(result.done, 'Iterator correctly closed');
  assert.sameValue(thisValue, iterator, 'correct `this` value');
  assert(!!args, 'arguments object provided');
  assert.sameValue(args.length, 0, 'zero arguments specified');
}).then($DONE, $DONE);