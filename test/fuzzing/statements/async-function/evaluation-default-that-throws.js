var y = null;
async function foo(x = y()) {}
foo().then(function () {
  $DONE('promise should be rejected');
}, function () {
  $DONE();
});