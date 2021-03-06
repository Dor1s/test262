var g = async function*() {
  yield 1;
  throw new Test262Error('Generator must not be resumed.');
};
var it = g();
var promise = new Promise(function() {});
it.next().then(function(ret) {
  assert.sameValue(ret.value, 1, 'Initial yield');
  assert.sameValue(ret.done, false, 'Initial yield');
  it.throw(promise).then($DONE, function(err) {
    assert.sameValue(err, promise, 'AsyncGeneratorReject(generator, resultValue)');
    it.next().then(function(ret) {
      assert.sameValue(ret.value, undefined, 'Generator is closed');
      assert.sameValue(ret.done, true, 'Generator is closed');
    }).then($DONE, $DONE);
    
  }).catch($DONE);
}).catch($DONE);