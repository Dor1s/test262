throw "Test262: This statement should not be evaluated.";
async function* f() {
  for await (var x of []) let
  [a] = 0;
}