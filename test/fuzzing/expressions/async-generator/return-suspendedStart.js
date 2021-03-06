var g = async function*() {
  throw new Test262Error('Generator must not be resumed.');
};
var it = g();
it.return('sent-value').then(function(ret) {
  assert.sameValue(ret.value, 'sent-value', 'AsyncGeneratorResolve(generator, completion.[[Value]], true)');
  assert.sameValue(ret.done, true, 'AsyncGeneratorResolve(generator, completion.[[Value]], true)');
  it.next().then(function(ret) {
    assert.sameValue(ret.value, undefined, 'Generator is closed');
    assert.sameValue(ret.done, true, 'Generator is closed');
  }).then($DONE, $DONE);
}).catch($DONE);