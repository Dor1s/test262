let rest;
let obj = {a: 3, b: 4};
Object.defineProperty(obj, "x", { value: 4, enumerable: false });
let iterCount = 0;
async function fn() {
  for await ({...rest} of [obj]) {
    assert.sameValue(rest.a, 3);
    assert.sameValue(rest.b, 4);
    assert.sameValue(Object.getOwnPropertyDescriptor(rest, "x"), undefined);
    verifyEnumerable(rest, "a");
    verifyWritable(rest, "a");
    verifyConfigurable(rest, "a");
    verifyEnumerable(rest, "b");
    verifyWritable(rest, "b");
    verifyConfigurable(rest, "b");
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);