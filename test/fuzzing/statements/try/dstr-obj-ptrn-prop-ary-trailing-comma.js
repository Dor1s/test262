var ranCatch = false;
try {
  throw { x: [45] };
} catch ({ x: [y], }) {
  assert.sameValue(y,45);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');