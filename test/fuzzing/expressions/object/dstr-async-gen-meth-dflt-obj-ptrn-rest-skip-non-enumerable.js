var o = {a: 3, b: 4};
Object.defineProperty(o, "x", { value: 4, enumerable: false });
var callCount = 0;
var obj = {
  async *method({...rest} = o) {
    assert.sameValue(rest.a, 3);
    assert.sameValue(rest.b, 4);
    assert.sameValue(rest.x, undefined);
    verifyEnumerable(rest, "a");
    verifyWritable(rest, "a");
    verifyConfigurable(rest, "a");
    verifyEnumerable(rest, "b");
    verifyWritable(rest, "b");
    verifyConfigurable(rest, "b");
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);