let rest;
let obj = {};
Object.defineProperty(obj, "a", { value: 3, configurable: false, enumerable: true });
Object.defineProperty(obj, "b", { value: 4, writable: false, enumerable: true });
let iterCount = 0;
async function * fn() {
  for await ({...rest} of [obj]) {
    assert.sameValue(rest.a, 3);
    assert.sameValue(rest.b, 4);
    verifyEnumerable(rest, "a");
    verifyWritable(rest, "a");
    verifyConfigurable(rest, "a");
    verifyEnumerable(rest, "b");
    verifyWritable(rest, "b");
    verifyConfigurable(rest, "b");
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);