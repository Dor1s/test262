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
var vals = { a: 23 };
result = { a: x.y } = vals;
assert.sameValue(setValue, 23);
assert.sameValue(result, vals);