var caught;
var f = () => eval('new.target;');
try {
  f();
} catch (err) {
  caught = err;
}
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, SyntaxError);