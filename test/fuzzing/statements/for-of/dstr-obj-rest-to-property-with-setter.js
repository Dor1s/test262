var settedValue;
var executedGetter = false;
var src = {
    get y() { executedGetter = true; },
    set y(v) {
        settedValue = v;
    }
}
src.y = undefined;
var counter = 0;
for ({...src.y} of [{ x: 1, y: 2}]) {
  assert.sameValue(settedValue.x, 1);
  assert.sameValue(settedValue.y, 2);
  assert(!executedGetter, "The property should not be accessed");
  counter += 1;
}
assert.sameValue(counter, 1);