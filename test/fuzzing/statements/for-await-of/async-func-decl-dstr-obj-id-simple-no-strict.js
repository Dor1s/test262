let eval;
let iterCount = 0;
async function fn() {
  for await ({ eval } of [{ eval: 1 }]) {
    
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => {
    assert.sameValue(eval, 1);
    assert.sameValue(iterCount, 1, 'iteration occurred as expected');
  }, $DONE)
  .then($DONE, $DONE);