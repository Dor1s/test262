async function foo() {
  let x = 1;
  let y = await x++;
  assert.sameValue(y, 1);
  assert.sameValue(x, 2);
}
foo().then($DONE, $DONE);