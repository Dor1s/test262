var caught;
try {
  (0,eval)('new.target;');
} catch (err) {
  caught = err;
}
assert.sameValue(typeof caught, 'object', 'object value thrown (global code)');
assert.sameValue(
  caught.constructor, SyntaxError, 'SyntaxError thrown (global code)'
);
caught = null;
try {
  (function() {
    (0,eval)('new.target;');
  })();
} catch (err) {
  caught = err;
}
assert.sameValue(
  typeof caught, 'object', 'object value thrown (function code)'
);
assert.sameValue(
  caught.constructor, SyntaxError, 'SyntaxError thrown (function code)'
);