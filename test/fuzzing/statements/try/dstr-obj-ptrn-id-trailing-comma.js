var ranCatch = false;
try {
  throw { x: 23 };
} catch ({ x, }) {
  assert.sameValue(x, 23);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');