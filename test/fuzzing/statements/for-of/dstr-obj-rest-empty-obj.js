var rest;
var counter = 0;
for ({...rest} of [{}]) {
  assert.notSameValue(rest, undefined);
  assert.notSameValue(rest, null);
  assert.sameValue(typeof rest, "object");
  counter += 1;
}
assert.sameValue(counter, 1);