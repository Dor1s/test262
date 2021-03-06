var g = async function*() {
  yield 1;
  throw new Test262Error('Generator must not be resumed.');
};
var it = g();
it.next().then(function(ret) {
  assert.sameValue(ret.value, 1, 'Initial yield');
  assert.sameValue(ret.done, false, 'Initial yield');
  it.return('sent-value').then(function(ret) {
    assert.sameValue(ret.value, 'sent-value', 'AsyncGeneratorResolve(generator, resultValue, true)');
    assert.sameValue(ret.done, true, 'AsyncGeneratorResolve(generator, resultValue, true)');
    it.next().then(function(ret) {
      assert.sameValue(ret.value, undefined, 'Generator is closed');
      assert.sameValue(ret.done, true, 'Generator is closed');
    }).then($DONE, $DONE);
    
  }).catch($DONE);
}).catch($DONE);