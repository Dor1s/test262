var await;
async function foo() {
  function* bar() {
    await = 1;
  }
  bar().next();
}
foo();
assert.sameValue(await, 1);