var x, setValue;
x = {
  get y() {
    $ERROR('The property should not be accessed.');
  },
  set y(val) {
    setValue = val;
  }
};
var result;
var vals = [23];
result = [x.y] = vals;
assert.sameValue(setValue, 23);
assert.sameValue(result, vals);