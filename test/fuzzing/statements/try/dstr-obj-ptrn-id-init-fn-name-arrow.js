var ranCatch = false;
try {
  throw {};
} catch ({ arrow = () => {} }) {
  assert.sameValue(arrow.name, 'arrow');
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');