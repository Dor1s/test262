var caught;
try {
  eval('super.property;');
} catch (err) {
  caught = err;
}
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, SyntaxError);