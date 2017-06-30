var caught;
function f() {
  // Early errors restricting the usage of SuperProperty necessitate the use of
  // `eval`.
  try {
    eval('super["x"];');
  } catch (err) {
    caught = err;
  }
}
f();
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, SyntaxError);