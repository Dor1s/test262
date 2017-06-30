let xGen, gen;
let iterCount = 0;
async function fn() {
  for await ([ xGen = function* x() {}, gen = function*() {} ] of [[]]) {
    assert.notSameValue(xGen.name, 'xGen');
    assert.sameValue(gen.name, 'gen');
    verifyNotEnumerable(gen, 'name');
    verifyNotWritable(gen, 'name');
    verifyConfigurable(gen, 'name');
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);