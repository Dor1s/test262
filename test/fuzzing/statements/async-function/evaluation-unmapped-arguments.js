async function foo(a = 42) {
  arguments[0] = 2;
  assert.sameValue(a, 1);
  a = 3;
  assert.sameValue(arguments[0], 2);
}
foo(1).then($DONE, $DONE);