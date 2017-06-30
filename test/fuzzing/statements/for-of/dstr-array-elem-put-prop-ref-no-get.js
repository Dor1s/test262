var x, setValue;
x = {
  get y() {
    $ERROR('The property should not be accessed.');
  },
  set y(val) {
    setValue = val;
  }
};
var counter = 0;
for ([x.y] of [[23]]) {
  assert.sameValue(setValue, 23);
  counter += 1;
}
assert.sameValue(counter, 1);