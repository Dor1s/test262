var proto = {
  method() {
    return 42;
  }
};
var object = {
  *g() {
    yield super.method();
  }
};
Object.setPrototypeOf(object, proto);
assert.sameValue(
  object.g().next().value,
  42,
  "The value of `object.g().next().value` is `42`, after executing `Object.setPrototypeOf(object, proto);`, where `object " + String(object) + "`"
);