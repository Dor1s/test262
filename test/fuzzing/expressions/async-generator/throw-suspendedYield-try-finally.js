var error = new Error('boop');
var g = async function*() {
  try {
    yield 1;
    throw new Test262Error('Generator must be resumed in finally block.');
  } finally {
    yield 2;
  }
};
var it = g();
it.next().then(function(ret) {
  assert.sameValue(ret.value, 1, 'Initial yield');
  assert.sameValue(ret.done, false, 'Initial yield');
  it.throw(error).then(function(ret) {
    assert.sameValue(ret.value, 2, 'Yield in finally block');
    assert.sameValue(ret.done, false, 'Yield in finally block');
    it.next().then($DONE, function(err) {
      assert.sameValue(err, error, 'AsyncGeneratorReject(generator, returnValue)');
      it.next().then(function(ret) {
        assert.sameValue(ret.value, undefined, 'Generator is closed');
        assert.sameValue(ret.done, true, 'Generator is closed');
      }).then($DONE, $DONE);
    }).catch($DONE);
    
  }).catch($DONE);
}).catch($DONE);