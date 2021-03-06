var setValue;
var x = {
  get y() {
    $ERROR('The property should not be accessed.');
  },
  set y(val) {
    setValue = val;
  }
};
var counter = 0;
for ([...x.y] of [[23, 45, 99]]) {
  assert.sameValue(setValue.length, 3);
  assert.sameValue(setValue[0], 23);
  assert.sameValue(setValue[1], 45);
  assert.sameValue(setValue[2], 99);
  counter += 1;
}
assert.sameValue(counter, 1);