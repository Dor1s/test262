async function foo(a) {
  arguments[0] = 2;
  assert.sameValue(a, 2);
  a = 3;
  assert.sameValue(arguments[0], 3);
}
foo(1).then($DONE, $DONE);