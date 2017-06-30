var count = 0;
var g = function*() {
  count += 1;
  yield;
  count += 1;
  yield;
  count += 1;
}
var x;
var result;
var vals = g();
result = [...x] = vals;
assert.sameValue(count, 3);
assert.sameValue(result, vals);