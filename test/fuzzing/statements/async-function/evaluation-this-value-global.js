var glob = this;
async function foo() {
  assert.sameValue(this, glob);
}
foo().then($DONE, $DONE);