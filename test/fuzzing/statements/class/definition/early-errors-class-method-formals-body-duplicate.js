throw "Test262: This statement should not be evaluated.";
class Foo {
  async function foo(bar) { let bar; }
}