var unscopablesGetterCalled = 0;
var a, b, flag = true;
with (a = { x: 7 }) {
  with (b = { x: 4, get [Symbol.unscopables]() {
                      unscopablesGetterCalled++;
                      return { x: flag=!flag };
                    } }) {
    x++;
  }
}
assert.sameValue(unscopablesGetterCalled, 1);
assert.sameValue(a.x, 7);
assert.sameValue(b.x, 5);
unscopablesGetterCalled = 0;
flag = true;
with (a = { x: 7 }) {
  with (b = { x: 4, get [Symbol.unscopables]() {
                      unscopablesGetterCalled++;
                      return { x: flag=!flag };
                    } }) {
    x--;
  }
}
assert.sameValue(unscopablesGetterCalled, 1);
assert.sameValue(a.x, 7);
assert.sameValue(b.x, 3);