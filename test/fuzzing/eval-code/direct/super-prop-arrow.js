var caught;
var f = () => eval('super.property;');
try {
  f();
} catch (err) {
  caught = err;
}
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, SyntaxError);