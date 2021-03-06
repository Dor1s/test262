function* generator() {}
assert.sameValue(
  generator.hasOwnProperty('caller'), false, 'No "caller" own property'
);
assert.sameValue(
  generator.hasOwnProperty('arguments'), false, 'No "arguments" own property'
);
assert.throws(TypeError, function() {
  return generator.caller;
});
assert.throws(TypeError, function() {
  generator.caller = {};
});
assert.throws(TypeError, function() {
  return generator.arguments;
});
assert.throws(TypeError, function() {
  generator.arguments = {};
});