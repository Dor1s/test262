throw "Test262: This statement should not be evaluated.";
async function fn() {
  for await ([arguments] of [[]])
}