var caught;
try {
  eval('new.target;');
} catch (err) {
  caught = err;
}
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, SyntaxError);