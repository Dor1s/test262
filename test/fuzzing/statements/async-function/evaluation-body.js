let called;
async function foo() {
  called = true;
  await new Promise();
}
foo();
assert(called);