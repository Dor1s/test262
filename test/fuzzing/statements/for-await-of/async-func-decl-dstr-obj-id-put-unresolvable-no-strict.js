{
let iterCount = 0;
async function fn() {
  for await ({ unresolvable } of [{}]) {
    
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => {
    assert.sameValue(unresolvable, undefined);
    assert.sameValue(iterCount, 1, 'iteration occurred as expected');
  }, $DONE)
  .then($DONE, $DONE);
}