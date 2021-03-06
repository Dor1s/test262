var arrow;
var counter = 0;
for ({ arrow = () => {} } of [{}]) {
  assert.sameValue(arrow.name, 'arrow');
  verifyNotEnumerable(arrow, 'name');
  verifyNotWritable(arrow, 'name');
  verifyConfigurable(arrow, 'name');
  counter += 1;
}
assert.sameValue(counter, 1);