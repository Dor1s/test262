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
for ({ a: x.y } of [{ a: 23 }]) {
  assert.sameValue(setValue, 23);
  counter += 1;
}
assert.sameValue(counter, 1);