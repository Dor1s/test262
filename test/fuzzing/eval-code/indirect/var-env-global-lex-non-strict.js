let x;
var caught;
try {
  (0,eval)('var x;');
} catch (err) {
  caught = err;
}
assert.notSameValue(caught, undefined);
assert.sameValue(caught.constructor, SyntaxError);