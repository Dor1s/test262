var rest;
var counter = 0;
for ({...rest} of ["foo"]) {
  assert.sameValue(rest["0"], "f");
  assert.sameValue(rest["1"], "o");
  assert.sameValue(rest["2"], "o");
  assert(rest instanceof Object);
  counter += 1;
}
assert.sameValue(counter, 1);