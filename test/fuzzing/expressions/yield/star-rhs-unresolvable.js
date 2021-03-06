var err;
function* g() {
  try {
    yield * test262unresolvable;
  } catch (_err) {
    err = _err;
  }
}
var iter = g();
var result;
result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(typeof err, 'object');
assert.sameValue(err.constructor, ReferenceError);