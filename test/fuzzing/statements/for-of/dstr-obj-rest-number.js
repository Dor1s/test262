var rest;
var counter = 0;
for ({...rest} of [51]) {
  assert.notSameValue(rest, undefined);
  assert.notSameValue(rest, null);
  assert(rest instanceof Object);
  counter += 1;
}
assert.sameValue(counter, 1);