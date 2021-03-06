var g = async function*() {
  throw new Test262Error('Generator must not be resumed.');
};
var it = g();
var resolve;
var promise = new Promise(function(resolver) {
  resolve = resolver;
});
it.return(promise).then(function(ret) {
  assert.sameValue(ret.value, 'unwrapped-value', 'AsyncGeneratorResolve(generator, completion.[[Value]], true)');
  assert.sameValue(ret.done, true, 'AsyncGeneratorResolve(generator, completion.[[Value]], true)');
  it.next().then(function(ret) {
    assert.sameValue(ret.value, undefined, 'Generator is closed');
    assert.sameValue(ret.done, true, 'Generator is closed');
  }).then($DONE, $DONE);
}).catch($DONE);
resolve('unwrapped-value');