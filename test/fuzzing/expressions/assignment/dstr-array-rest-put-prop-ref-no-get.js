var setValue;
var x = {
  get y() {
    $ERROR('The property should not be accessed.');
  },
  set y(val) {
    setValue = val;
  }
};
var result;
var vals = [23, 45, 99];
result = [...x.y] = vals;
assert.sameValue(setValue.length, 3);
assert.sameValue(setValue[0], 23);
assert.sameValue(setValue[1], 45);
assert.sameValue(setValue[2], 99);
assert.sameValue(result, vals);