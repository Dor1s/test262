var v2, vNull, vHole, vUndefined, vOob;
var counter = 0;
for ([v2 = 10, vNull = 11, vHole = 12, vUndefined = 13, vOob = 14] of [[2, null, , undefined]]) {
  assert.sameValue(v2, 2);
  assert.sameValue(vNull, null);
  assert.sameValue(vHole, 12);
  assert.sameValue(vUndefined, 13);
  assert.sameValue(vOob, 14);
  counter += 1;
}
assert.sameValue(counter, 1);