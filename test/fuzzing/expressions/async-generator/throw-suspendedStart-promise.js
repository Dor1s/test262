var g = async function*() {
  throw new Test262Error('Generator must not be resumed.');
};
var it = g();
var promise = new Promise(function() {});
it.throw(promise).then($DONE, function(err) {
  assert.sameValue(err, promise, 'AsyncGeneratorReject(generator, completion.[[Value]])');
  it.next().then(function(ret) {
    assert.sameValue(ret.value, undefined, 'Generator is closed');
    assert.sameValue(ret.done, true, 'Generator is closed');
  }).then($DONE, $DONE);
}).catch($DONE);